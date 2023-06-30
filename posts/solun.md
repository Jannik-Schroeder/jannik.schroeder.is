---
title: "Solun Services"
image: "/solun.png"
description: "This article is about the creation and the idea behind solun."
tags: ['nextjs', 'typescript', 'mongodb', 'groupware', 'tailwindcss']
date: "2023-06-30"
website: "https://solun.pm"
github: "https://github.com/solun-pm"
---

## What is Solun?
Solun is a service that allows you to share files, text and sending emails with end-to-end encryption, without having to worry about your privacy.

## What is the purpose of Solun?
Solun aims to fill the gap in the privacy space and create an independent, 
open service that allows you to share files, text and send emails with end-to-end encryption - 
without having to use external services like Whatsapp, Telegram, Signal and more.

## What is this Article about?
This article is mainly about the Infrastructure
and how I build the server structure and how we ensure our data security and uptime.
For information about the code and development, check out the blog [here](https://dwag.me/project/solun).

## How is the Server structured?
![Solun Server Structure](/structure.png)

Maybe you ask why we have chosen this structure. Let's start with why we chose VM's instead of the cloud. Simply because it is cheaper. We have virtualized our systems with Proxmox.  
The reason why we have chosen Proxmox is that it is open-source and has a great community.

### Proxmox and Hetzner Dedicated Server

#### The 2 App Servers
The Webservers are simply two docker hosts that are running behind a load balancer with Health Checks.
On this docker host, we are running our three frontend services.
The first one is the main [Solun](https://solun.pm) service, the second one is the [Solun Auth Dashboard](https://auth.solun.pm) and the third one is the [Solun Webmail](https://mail.solun.app).

#### The API Server
The API Server is a simple docker host that is running our API. 
The API is running behind a reverse proxy that is handling the SSL Certificates.
This Api Server is Connected to the MongoDB Server and the Storage Server where the files are stored.

#### The MongoDB Server
We are using MongoDB as our main database. MongoDB is a NoSQL database that is very fast and easy to use. 
We are running the MongoDB server as a plain Database Server without any dockerization. 
We wanted to use Docker, but there are issues with CPU usage under proxmox, and we decided not to use it for better stability.

#### The Storage Server
The storage server is just a Debian 12 VM with a lot of storage and a Samba share installed.
We use Samba because it is easy to use, and we can mount the share directly on the API server.

#### The reverse proxy
The Proxy we are using is Traefik.
Traefik is a reverse proxy and load balancer that is very powerful and trusted by many huge companies. 

#### The firewall
As Firewall and NAT router, we are using OPNsense.
Its open-source firewall with a huge community and a lot of features.
Also, it's got a nice little UI :).

### Hetzner Cloud
So why do we use the Hetzner Cloud for Our Mail Server and not our Dedicated?
The answer is simple. We want to have a high uptime for our mail server.
The Hetzner Cloud is very fast and provides a high uptime because of the cloud infrastructure. 
They are using the powerful tool [Openstack](https://www.openstack.org/) to manage their cloud infrastructure.
They got a good DDos protection, and if a Server fails, they will automatically move the VM to another host so that we can Provide a high uptime for our mail server.

#### The Mail Server
As Mail Server we are using [Mailcow](https://mailcow.email/).
This is mainly because it is easy to use and production ready.
We got a simple API that is connected to our Dashboard. 
It is really easy to update and maintain, so we can provide a high uptime for our mail server.

### wglc.at
wglc.at is the Network of my friend, and we are using it to back up our VM's. 
In the future, we will also use it for a second Instance of our Network to provide the highest uptime possible.
Check out his [Website](https://dwag.me/project/homelab) for more information about the Homelab.

## Deployment

### The Concept
We wanted to have a simple and automated deployment process that is easy to use and maintain.
The idea was that we have a dev and a prod branch, which we managed to do. We wanted that every time the new code is pushed the apps are redeployed.

### The Implementation
So we added a GitHub Action that is building the Docker Images and pushing them to the GitHub Container Registry.
Here is the Code for the Action:

```yaml
name: Create and publish a Docker image

on:
  push:
    branches:
      - main
      - dev
      - docker
  workflow_dispatch:

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: ${{ github.repository }}

jobs:
  build-and-push-image:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Log in to the Container registry
        uses: docker/login-action@65b78e6e13532edd9afa3aa52ac7964289d1a9c1
        with:
          registry: ${{ env.REGISTRY }}
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Extract metadata (tags, labels) for Docker
        id: meta
        uses: docker/metadata-action@9ec57ed1fcdbf14dcef7dfbe97b2010124a938b7
        with:
          images: ${{ env.REGISTRY }}/${{ env.IMAGE_NAME }}

      - name: Build and push Docker image
        uses: docker/build-push-action@f2a1d5e99d037542a71f64918e516c093c6f3fc4
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
```

At the moment, we are only building the Docker Image and not Deploying it.
To restart the Containers we are using the apt package `webhooks` on the API Sever.
Our Traefik listening on the port 80 and 443 and is forwarding the requests to the API Server.

```yaml
http:
  routers:
    webhooks:
      rule: "Host(`restart.solun.pm`)"
      tls:
        options: default
      service: sv-webhooks
  
  services:
    sv-webhooks:
      loadBalancer:
        servers:
          - url: "http://172.17.0.30:9000"
```

The Webhooks are listening on port 9000 and are running a bash scripts to restart the containers if a request is sent to the endpoints.
These bash scripts are running the following commands:

```bash
#!/bin/bash
(ssh root@172.17.0.31 "docker image prune -f && cd /root && docker compose pull && docker compose up -d") >&2
```

In this Docker Compose file, we are setting up the environment variables and the volumes.
A sample File can be found [here](https://github.com/solun-pm/solun/blob/main/docker-compose.yml).

### Deploy from GitHub
The deployment from GitHub is after this Setup very easy.
After you can just run a Webhook to restart the Container. 
Now we just have to add this to the Docker Build Action:

```yaml
      - name: Restart Node 1
        run: |
          curl -X POST ${{ secrets.WEBHOOK_DOMAIN }}/hooks/restart-app-1
          
      - name: Wait for server 1 to restart
        run: |
          sleep 60s

      - name: Restart Node 2
        run: |
          curl -X POST ${{ secrets.WEBHOOK_DOMAIN }}/hooks/restart-app-2
          

      - name: Setup Node.js environment
        uses: actions/setup-node@v2.4.1
```

### Why are we using two Frontend Servers?
As you can see, we are using two Frontend Servers. Mainly because we want to provide a high uptime for our users even if we are deploying a new Version.
As I said earlier, we are using Traefik as a reverse proxy and load balancer. If we deploy a New Version of out App the Traefik Health Check and Load Balancer will automatically move the traffic to the other server.

### The Version History
So that our users can see when a new version is deployed, a webhook is sent to our Discord server after a successful deployment and provided with information. This is done with the following code:

```yaml
      - name: Discord Webhook for Main
        if: github.ref == 'refs/heads/main'
        run: |
          PACKAGE_VERSION=$(node -p "require('./package.json').version")
          COMMIT_LINK="https://github.com/${{ github.repository }}/commit/${{ github.sha }}"
          curl -X POST ${{ secrets.DISCORD_WEBHOOK }} \
          -H "Content-Type: application/json" \
          -d '{
            "embeds": [{
              "title": "New Production Version deployed on solun.pm",
              "url": "https://solun.pm",
              "description": "[Changes]('$COMMIT_LINK')",
              "fields": [
                { "name": "Version", "value": "'$PACKAGE_VERSION'", "inline": false }
              ],
              "color": 255
            }]
          }'

      - name: Discord Webhook for Dev
        if: github.ref == 'refs/heads/dev'
        run: |
          PACKAGE_VERSION=$(node -p "require('./package.json').version")
          COMMIT_LINK="https://github.com/${{ github.repository }}/commit/${{ github.sha }}"
          curl -X POST ${{ secrets.DISCORD_WEBHOOK }} \
          -H "Content-Type: application/json" \
          -d '{
            "embeds": [{
              "title": "New Development Version deployed on dev.solun.pm",
              "url": "https://dev.solun.pm",
              "description": "[Changes]('$COMMIT_LINK')",
              "fields": [
                { "name": "Version", "value": "'$PACKAGE_VERSION'", "inline": false }
              ],
              "color": 16753920
            }]
          }'
```

### Problems
The biggest problem we had was how we can build the Docker Images and still use the environment variables.
To build the Docker Images, we Need a Dockerfile that provides Information about environment variables and the ports.
The Problem with this is that after a NextJS app is built, the environment variables are fixed and cannot be changed.
So we had to find a way to build the Docker Images and still use the environment variables.

### The Solution
The solution was to use a Dockerfile that is only used to install the Packages and not to build the NextJS app.
For this, we are using the following Dockerfile:

#### Dockerfile 

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

ENV MONGODB_URL=
ENV JWT_SECRET_KEY=
ENV MAILSERVER_BASEURL=
ENV MAILSERVER_API_KEY=
ENV NEXT_PUBLIC_API_DOMAIN=
ENV NEXT_PUBLIC_MAIN_DOMAIN=
ENV NEXT_PUBLIC_AUTH_DOMAIN=
ENV NEXT_PUBLIC_WEBMAIL_DOMAIN=
ENV NEXT_PUBLIC_WEBMAIL_AUTH_DOMAIN=
ENV NEXT_PUBLIC_MAIL_HOST=
ENV NEXT_PUBLIC_IMAP_PORT=
ENV NEXT_PUBLIC_SMTP_PORT=

CMD npm run build && npm run start
```

To exclude the .evn file from the Docker Image, we are using a .dockerignore file:

#### .dockerignore

```
.env
.env.local
.env.sample
```

As you can see, we are only installing the packages and not building the NextJS app. 
The NextJS app is build after Starting the Container locally and defining the environment variables in the Compose file.

#### docker-compose.yml

```yaml
version: '3.8'
services:
  solun:
    image: ghcr.io/solun-pm/solun:docker
    container_name: solun
    ports:
      - 3000:3000
    environment:
      - MONGODB_URL=
      - JWT_SECRET_KEY=
      - MAILSERVER_BASEURL=
      - MAILSERVER_API_KEY=
      - NEXT_PUBLIC_API_DOMAIN=
      - NEXT_PUBLIC_MAIN_DOMAIN=
      - NEXT_PUBLIC_AUTH_DOMAIN=
      - NEXT_PUBLIC_WEBMAIL_DOMAIN=
      - NEXT_PUBLIC_WEBMAIL_AUTH_DOMAIN=
      - NEXT_PUBLIC_MAIL_HOST=
      - NEXT_PUBLIC_IMAP_PORT=
      - NEXT_PUBLIC_SMTP_PORT=
    volumes:
      - /your/path:/app/public/uploads/files
    restart: always
```

## Security and Privacy
### Why there are so many Security Features?
We offer our users the possibility to make the security according to their wishes.
E2E and password is of course the highest level of security we offer. 
You may ask yourself why there are "insecure" functions that are not 100% secure. 
But we have thought. 
Since the link to E2E is the key to decrypt the file in the URL is included, you can not simply enter them by heart. 
So it should be possible to use our system also as url shortener. 
For this you have our word that we will not read your data. 

### How secure is our System?
As an Outsider, it is impossible to connect to our server. For security reasons, we will not go into further security.
But we can assure you that we have thought of everything and that our system is secure. And only Intern Accessible.

## Collaboration and community aspects
### How can I contribute? 
We are very happy about every contribution. 
You can contribute to our project by creating a Fork of one of our Repositories and then creating a Pull Request.
We will then review your Pull Request, and if everything is fine, we will merge it or ask you to make some changes.
Our GitHub Organization is [here](https://github.com/solun-pm).

### How can I report a bug?
You can report a bug by creating an Issue in the corresponding Repository.
We will then review your Issue and try to fix the bug as soon as possible.

### How can I request a feature?
You can request a feature by creating an Issue in the corresponding Repository.
We will then review your Issue and try to implement the feature as soon as possible.

## Conclusion
### What is the goal of this project?
The goal of this project is to provide a secure and privacy-friendly alternative to Other Sharing Services.
We want to offer our users the possibility to share files with other people without having to worry about their privacy.

### Current status of the project
The project is currently in the beta phase.
The Main Features are implemented and the project is ready for use.
We are currently working on the Webmail Client, but this is not yet ready for use.
At the Services you will find the current status of the Service likes if it is ready for use or not.

## Future plans
You can already log in and create an account.
However, you can not use the webmail function.
You can use your mail without automatic E2E encryption.
In the future when we have collected a few users. 
We want to offer a few premium features, like more storage and no Rate Limit.
We also want a Desktop Client for Windows, Linux and macOS.
There is no plan for mobile apps at the moment. 
However, webmail will become responsive like all other services.
In the future, of course, we also want to grow globally and offer servers in America and other regions of the world.
However, since we are currently not making any sales with this project, we only offer location in Germany. 

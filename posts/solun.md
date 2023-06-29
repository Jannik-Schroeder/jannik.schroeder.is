---
title: "Solun Services"
image: "/solun.png"
description: "This article is about the creation and the idea behind solun."
tags: ['nextjs', 'typescript', 'mongodb', 'groupware', 'tailwindcss']
date: "2023-06-29"
---

## What is Solun?
Solun is a service that allows you to share files, text and sending emails with end-to-end encryption, without having to worry about your privacy.

## What is the purpose of Solun?
Solun aims to fill the gap in the privacy space and create an independent, open service that allows you to share files, text and send emails with end-to-end encryption - without having to use external services like Whatsapp, Telegram, Signal and more.

## What is this Article about?
This article is mainly about the backend and how I build the backend and how we ensure our data security and uptime. For information about the code and development, check out the blog [here](https://dwag.me/project/solun).

## How is the Server strucktured?
![Solun Server Structure](/structure.png)

Maybe you ask why we have chosen this structure. Let's start with why we chose VM's instead of the cloud. Simply because it is cheaper. We have virtualized our systems with Proxmox.  
The reason why we have chosen Proxmox is that it is open-source and has a great community.

### Proxmox and Hetzner Dedicated Server

#### The 2 App Servers
The Webservers are simply two docker hosts that are running behind a load balancer with Health Checks. On this docker host, we are running our three frontend services. The first one is the main [Solun](https://solun.pm) service, the second one is the [Solun Auth Dashboard](https://auth.solun.pm) and the third one is the [Solun Webmail](https://mail.solun.app).

#### The API Server
The API Server is a simple docker host that is running our API. The API is running behind a reverse proxy that is handling the SSL Certificates. This Api Server is Connected to the MongoDB Server and the Storage Server where the files are stored.

#### The MongoDB Server
We are using MongoDB as our main database. MongoDB is a NoSQL database that is very fast and easy to use. We are running the MongoDB server as a plain Database Server without any dockerization. We wanted to use Docker, but there are issues with CPU usage under proxmox and we decided not to use it for better stability.

#### The Storage Server
The storage server is just a Debian 12 VM with a lot of storage and a Samba share installed. We use Samba because it is easy to use, and we can mount the share directly on the API server.

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

### wgcl.at
wglc.at is the Network of my friend, and we are using it to back up our VM's. 
In the future, we will also use it for a second Instance of our Network to provide the highest uptime possible.
Check out his [Website](https://dwag.me/project/homelab) for more information about the Homelab.

## Deployment
As we said before, we are using Docker for our services.
Mainly, we got our two frontend servers because the deployment of a new Version takes quit a long time, and we want to provide a high uptime for our users.
Because we are using GitHub to host our code, we are using GitHub Actions to build and deploy our services. 
Especially in this case, we are not able to build the Docker Images on GitHub.
For this, you have to how NextJs works. Don't get me wrong the Docker Image is built on GitHub, but the NextJs App is not.
This is because we want our users to be able to set their own environment variables. This is not possible if we build the NextJs App on GitHub because in a NextJS build the variables are fixed.
So we have to build the App every time we restart the container.
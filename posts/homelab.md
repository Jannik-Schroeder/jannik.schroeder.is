---
title: "Homelab"
image: "/homelab.jpg"
description: "The beggining of my homelab journey."
tags: ['homelab', 'linux', 'computing', 'buidling', 'learning'] 
date: "2023-08-13"
---

## A HomeLab, but why?
One question I often hear is: Why do you want to build a Homelab?

The short answer is usually: why not?

I mean let's be honest it is very cool to have a server in the basement. But there are also some more serious reasons. For example, I want to learn more about Linux and networking. And of course you can just rent a server, but this isn's the same.

## The Hardware

### The Server
The first Server i bought is a Gigabyte R281-N40. At the Moment it has 2x Intel Xeon Platinum 8124m and 128GB of RAM. I will continue to upgrade it in the future. 

![Gigabyte R281-N40](/gigabyte_r281-n40.png)

### The Switch

The Switch is a Tp-Link TL-SG3428X with 24 Ports. It is a L3 Switch and has 4 SFP+ Ports. So i can connect my Server an PC with 10Gbit/s. For the future i want to buy a second sfp+ only switch to have my Intranet on 10Gbit/s.

### The Firewall

As a firewall I'm thinking of buying either a Microtik or Tp-Link router or I'll choose the variant with a virtualized opnsense. I haven't decided yet.

### The Storage

FOr Storage i use the Slots of my Gigabyte Server. I will upgrade my Storage continously. At the moment i have 3x 2TB SSDs. As raid i use ZFS2. 

## The Software

### The Hypervisor

As a Hypervisor i will use Proxmox. I have already used it in the past and I am very satisfied with it.


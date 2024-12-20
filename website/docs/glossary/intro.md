---
sidebar_position: 1
---

import styles from '@site/src/css/styles.module.css';


# Technical Glossary 📚

Welcome to our comprehensive homelab and server glossary. This reference guide covers common terms, acronyms, and concepts you'll encounter in your journey.

## Authentication & Directory Services

### Active Directory (AD)
<div className={styles.card}>
Microsoft's directory service for Windows domain networks. Manages users, computers, and network resources.
</div>

### LDAP
<div className={styles.card}>
Lightweight Directory Access Protocol. Protocol for accessing directory services.
</div>

### Kerberos
<div className={styles.card}>
Network authentication protocol designed to provide strong authentication for client/server applications.
</div>

### SAML
<div className={styles.card}>
Security Assertion Markup Language. Standard for exchanging authentication and authorization data.
</div>

## Storage & Data Management

### ACID
<div className={styles.card}>
Atomicity, Consistency, Isolation, Durability. Properties that guarantee database transactions are processed reliably.
</div>

### DAS
<div className={styles.card}>
Direct Attached Storage. Storage directly connected to a computer.
</div>

### NAS
<div className={styles.card}>
Network Attached Storage. File-level storage device accessible over a network.
</div>

### RAID
<div className={styles.card}>
Redundant Array of Independent Disks. Data storage virtualization technology.
</div>

### ZFS
<div className={styles.card}>
Zettabyte File System. Combined file system and logical volume manager.
</div>

### CEPH
<div className={styles.card}>
Distributed storage system providing object, block, and file storage in a single unified system.
</div>

### LVM
<div className={styles.card}>
Logical Volume Management. Provides flexible disk space management in Linux systems.
</div>

### S3
<div className={styles.card}>
Simple Storage Service. Object storage protocol originally from Amazon, now widely supported.
</div>

## Virtualization & Containers

### Docker
<div className={styles.card}>
Platform for developing, shipping, and running applications in containers.
</div>

### Hypervisor
<div className={styles.card}>
Software allowing multiple operating systems to share hardware resources.
</div>

### KVM
<div className={styles.card}>
Kernel-based Virtual Machine. Virtualization infrastructure for Linux.
</div>

### VM
<div className={styles.card}>
Virtual Machine. Emulation of a computer system.
</div>

## Cloud & Infrastructure

### Ansible
<div className={styles.card}>
Automation tool for configuration management, application deployment, and task automation.
</div>

### Terraform
<div className={styles.card}>
Infrastructure as Code software tool for building and managing infrastructure safely and efficiently.
</div>

### Proxmox
<div className={styles.card}>
Open-source virtualization management platform for running VMs and containers.
</div>

## Network Infrastructure

### CIDR
<div className={styles.card}>
Classless Inter-Domain Routing. Method for allocating IP addresses and routing IP packets.
</div>

### DHCP
<div className={styles.card}>
Dynamic Host Configuration Protocol. Automatically assigns IP addresses to network devices.
</div>

### DNS
<div className={styles.card}>
Domain Name System. Translates domain names into IP addresses.
</div>

### Load Balancer
<div className={styles.card}>
Device distributing network traffic across multiple servers.
</div>

## Network Protocols

### BGP
<div className={styles.card}>
Border Gateway Protocol. Core routing protocol of the Internet used for exchanging routing information.
</div>

### OSPF
<div className={styles.card}>
Open Shortest Path First. Interior gateway protocol used for routing within autonomous systems.
</div>

### VXLAN
<div className={styles.card}>
Virtual Extensible LAN. Network virtualization technology that enables creation of overlay networks.
</div>

## Hardware & Components

### ECC RAM
<div className={styles.card}>
Error-Correcting Code Memory. RAM that can detect and correct common types of memory corruption.
</div>

### NVMe
<div className={styles.card}>
Non-Volatile Memory Express. Interface protocol for solid-state drives.
</div>

### SATA
<div className={styles.card}>
Serial Advanced Technology Attachment. Computer bus interface for storage devices.
</div>

### UPS
<div className={styles.card}>
Uninterruptible Power Supply. Battery backup power device.
</div>

## Security & Access

### SSL/TLS
<div className={styles.card}>
Secure Sockets Layer/Transport Layer Security. Cryptographic protocols for secure communications.
</div>

### SSH
<div className={styles.card}>
Secure Shell. Cryptographic network protocol for secure operations.
</div>

### VPN
<div className={styles.card}>
Virtual Private Network. Encrypted network connection.
</div>

## Management & Monitoring

### iDRAC
<div className={styles.card}>
Integrated Dell Remote Access Controller. Remote server management system.
</div>

### IPMI
<div className={styles.card}>
Intelligent Platform Management Interface. Standard for hardware monitoring and control.
</div>

### SNMP
<div className={styles.card}>
Simple Network Management Protocol. Protocol for collecting and organizing network device information.
</div>

## Popular Software Solutions

### OPNsense
<div className={styles.card}>
Open-source firewall and routing software.
</div>

### Pi-hole
<div className={styles.card}>
Network-level advertisement and Internet tracker blocking application.
</div>

### PLEX
<div className={styles.card}>
Media server software for organizing and streaming personal media.
</div>

### TrueNAS
<div className={styles.card}>
Operating system for network-attached storage systems.
</div>

## Database Systems

### MariaDB
<div className={styles.card}>
Open-source fork of MySQL, providing a relational database management system.
</div>

### PostgreSQL
<div className={styles.card}>
Advanced open-source relational database with extensive features and extensibility.
</div>

### Redis
<div className={styles.card}>
In-memory data structure store used as database, cache, message broker, and queue.
</div>

## Monitoring & Metrics

### Grafana
<div className={styles.card}>
Analytics and interactive visualization platform for metrics and logs.
</div>

### Prometheus
<div className={styles.card}>
Open-source monitoring and alerting toolkit designed for reliability and scalability.
</div>

### InfluxDB
<div className={styles.card}>
Time series database designed to handle high write and query loads.
</div>

## Container Orchestration

### Docker Compose
<div className={styles.card}>
Tool for defining and running multi-container Docker applications.
</div>

### Kubernetes
<div className={styles.card}>
Container orchestration platform for automating deployment, scaling, and management of containerized applications.
</div>

### Portainer
<div className={styles.card}>
Container management platform that simplifies Docker and Kubernetes operations.
</div>

## Backup & Recovery

### Restic
<div className={styles.card}>
Fast and secure backup program supporting multiple storage backends.
</div>

### Veeam
<div className={styles.card}>
Backup and replication software for virtual, physical, and cloud-based workloads.
</div>

### Borgbackup
<div className={styles.card}>
Deduplicating archiver with compression and encryption capabilities.
</div>

:::tip
This glossary is regularly updated as technology evolves. If you notice any missing terms, let us know!
:::

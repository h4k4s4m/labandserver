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

## Additional Terms

### API
<div className={styles.card}>
Application Programming Interface. A set of rules and protocols for building and interacting with software applications.
</div>

### CDN
<div className={styles.card}>
Content Delivery Network. A geographically distributed network of servers that cache static content to improve delivery speed.
</div>

### CI/CD
<div className={styles.card}>
Continuous Integration/Continuous Deployment. A set of practices for automating the software development lifecycle.
</div>

### CLI
<div className={styles.card}>
Command Line Interface. A text-based interface for interacting with a computer system.
</div>

### CMS
<div className={styles.card}>
Content Management System. Software for creating and managing digital content.
</div>

### CPU
<div className={styles.card}>
Central Processing Unit. The primary processing component of a computer.
</div>

### CRON
<div className={styles.card}>
Time-based job scheduler in Unix-like systems.
</div>

### CSS
<div className={styles.card}>
Cascading Style Sheets. A style sheet language used for describing the presentation of a document written in a markup language.
</div>

### DHCP Relay
<div className={styles.card}>
A network device that forwards DHCP requests between different network segments.
</div>

### DMZ
<div className={styles.card}>
Demilitarized Zone. A network segment that sits between a private network and the public internet.
</div>

### Dockerfile
<div className={styles.card}>
A text file that contains instructions for building a Docker image.
</div>

### FQDN
<div className={styles.card}>
Fully Qualified Domain Name. The complete domain name for a specific host.
</div>

### GPU
<div className={styles.card}>
Graphics Processing Unit. A specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer intended for output to a display device.
</div>

### HTML
<div className={styles.card}>
Hypertext Markup Language. The standard markup language for documents designed to be displayed in a web browser.
</div>

### HTTP
<div className={styles.card}>
Hypertext Transfer Protocol. The foundation of data communication for the World Wide Web.
</div>

### HTTPS
<div className={styles.card}>
Hypertext Transfer Protocol Secure. The secure version of HTTP.
</div>

### IDS
<div className={styles.card}>
Intrusion Detection System. A system that monitors network traffic for malicious activity.
</div>

### IPS
<div className={styles.card}>
Intrusion Prevention System. A system that actively blocks malicious network traffic.
</div>

### ISO
<div className={styles.card}>
International Organization for Standardization. A standard file format for optical disc images.
</div>

### JavaScript
<div className={styles.card}>
A programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
</div>

### JSON
<div className={styles.card}>
JavaScript Object Notation. A lightweight data-interchange format.
</div>

### LAMP Stack
<div className={styles.card}>
Linux, Apache, MySQL, PHP. A common web development stack.
</div>

### MFA
<div className={styles.card}>
Multi-Factor Authentication. An authentication method that requires multiple forms of verification.
</div>

### NAT
<div className={styles.card}>
Network Address Translation. A method of remapping IP addresses.
</div>

### NTP
<div className={styles.card}>
Network Time Protocol. A protocol for synchronizing the clocks of computer systems over packet-switched, variable-latency data networks.
</div>

### OAuth
<div className={styles.card}>
Open Authorization. An open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.
</div>

### PCI
<div className={styles.card}>
Peripheral Component Interconnect. A standard for connecting hardware devices to a computer.
</div>

### PHP
<div className={styles.card}>
A general-purpose scripting language especially suited to web development.
</div>

### PXE
<div className={styles.card}>
Preboot Execution Environment. A network boot protocol.
</div>

### Python
<div className={styles.card}>
A high-level, general-purpose programming language.
</div>

### REST
<div className={styles.card}>
Representational State Transfer. An architectural style for designing networked applications.
</div>

### RPM
<div className={styles.card}>
Red Hat Package Manager. A package management system used in Linux distributions.
</div>

### SAN
<div className={styles.card}>
Storage Area Network. A dedicated network for storage devices.
</div>

### SMTP
<div className={styles.card}>
Simple Mail Transfer Protocol. A protocol for sending email.
</div>

### SQL
<div className={styles.card}>
Structured Query Language. A language for managing and querying databases.
</div>

### TCP
<div className={styles.card}>
Transmission Control Protocol. A core protocol of the Internet protocol suite.
</div>

### UDP
<div className={styles.card}>
User Datagram Protocol. A connectionless protocol used for low-latency data transfer.
</div>

### VLAN
<div className={styles.card}>
Virtual Local Area Network. A logical network segment within a physical network.
</div>

### WAF
<div className={styles.card}>
Web Application Firewall. A security device that protects web applications from attacks.
</div>

### YAML
<div className={styles.card}>
YAML Ain't Markup Language. A human-readable data serialization language.
</div>

### RAID 0
<div className={styles.card}>
Disk striping without redundancy.
</div>

### RAID 1
<div className={styles.card}>
Disk mirroring.
</div>

### RAID 5
<div className={styles.card}>
Disk striping with parity.
</div>

### RAID 6
<div className={styles.card}>
Disk striping with double parity.
</div>

### RAID 10
<div className={styles.card}>
Disk mirroring and striping.
</div>

### VirtualBox
<div className={styles.card}>
A free and open-source hosted hypervisor for x86 virtualization.
</div>

### VMware
<div className={styles.card}>
A commercial hypervisor for x86 virtualization.
</div>

### ESXi
<div className={styles.card}>
A bare-metal hypervisor from VMware.
</div>

### vSphere
<div className={styles.card}>
VMware's server virtualization platform.
</div>

### vCenter
<div className={styles.card}>
VMware's management server for vSphere.
</div>

### OpenStack
<div className={styles.card}>
A free and open-source cloud computing platform.
</div>

### AWS
<div className={styles.card}>
Amazon Web Services. A cloud computing platform.
</div>

### Azure
<div className={styles.card}>
Microsoft's cloud computing platform.
</div>

### GCP
<div className={styles.card}>
Google Cloud Platform. A cloud computing platform.
</div>

### DigitalOcean
<div className={styles.card}>
A cloud infrastructure provider.
</div>

### Linode
<div className={styles.card}>
A cloud infrastructure provider.
</div>

### Hetzner
<div className={styles.card}>
A cloud infrastructure provider.
</div>

### Cloudflare
<div className={styles.card}>
A web infrastructure and security company.
</div>

### Nginx
<div className={styles.card}>
A popular web server.
</div>

### Apache
<div className={styles.card}>
A popular web server.
</div>

### HAProxy
<div className={styles.card}>
A popular load balancer.
</div>

### WireGuard
<div className={styles.card}>
A modern VPN protocol.
</div>

### OpenVPN
<div className={styles.card}>
A popular VPN protocol.
</div>

### pfSense
<div className={styles.card}>
An open-source firewall and router software.
</div>

### Unifi
<div className={styles.card}>
A network management platform from Ubiquiti.
</div>

### Grafana Loki
<div className={styles.card}>
A log aggregation system from Grafana.
</div>

### Elasticsearch
<div className={styles.card}>
A search and analytics engine.
</div>

### Kibana
<div className={styles.card}>
A data visualization dashboard for Elasticsearch.
</div>

### Fluentd
<div className={styles.card}>
A data collector for unified logging layer.
</div>

### Rsyslog
<div className={styles.card}>
A system logging utility for Linux.
</div>

### Telegraf
<div className={styles.card}>
A plugin-driven server agent for collecting and reporting metrics.
</div>

### Node Exporter
<div className={styles.card}>
A Prometheus exporter for system metrics.
</div>

### cAdvisor
<div className={styles.card}>
A container resource usage and performance characteristics analysis tool.
</div>

### etcd
<div className={styles.card}>
A distributed key-value store used by Kubernetes.
</div>

### Helm
<div className={styles.card}>
A package manager for Kubernetes.
</div>

### Istio
<div className={styles.card}>
A service mesh for Kubernetes.
</div>

### Traefik
<div className={styles.card}>
A modern HTTP reverse proxy and load balancer.
</div>

### Rancher
<div className={styles.card}>
A Kubernetes management platform.
</div>

### Ceph RBD
<div className={styles.card}>
Ceph block storage.
</div>

### CephFS
<div className={styles.card}>
Ceph file system.
</div>

### MinIO
<div className={styles.card}>
An object storage server compatible with Amazon S3.
</div>

### GlusterFS
<div className={styles.card}>
A distributed file system.
</div>

### NFS
<div className={styles.card}>
Network File System. A protocol for accessing files over a network.
</div>

### SMB
<div className={styles.card}>
Server Message Block. A protocol for sharing files over a network.
</div>

### iSCSI
<div className={styles.card}>
Internet Small Computer System Interface. A protocol for accessing block storage over a network.
</div>

### LACP
<div className={styles.card}>
Link Aggregation Control Protocol. A protocol for combining multiple network links into a single logical link.
</div>

### STP
<div className={styles.card}>
Spanning Tree Protocol. A network protocol that prevents loops in a network.
</div>

### VLAN Tagging
<div className={styles.card}>
The process of adding VLAN identifiers to network packets.
</div>

### Subnet
<div className={styles.card}>
A logical subdivision of an IP network.
</div>

### Gateway
<div className={styles.card}>
A network device that connects two or more networks.
</div>

### Firewall
<div className={styles.card}>
A network security system that monitors and controls network traffic.
</div>

### Reverse Proxy
<div className={styles.card}>
A server that sits in front of one or more web servers and forwards client requests to those servers.
</div>

### Forward Proxy
<div className={styles.card}>
A server that sits in front of one or more clients and forwards their requests to the internet.
</div>

### SSH Key
<div className={styles.card}>
A cryptographic key used for secure SSH authentication.
</div>

### Certificate Authority
<div className={styles.card}>
An entity that issues digital certificates.
</div>

### Let's Encrypt
<div className={styles.card}>
A free, automated, and open certificate authority.
</div>

### Fail2ban
<div className={styles.card}>
An intrusion prevention software framework that protects computer servers from brute-force attacks.
</div>

### SELinux
<div className={styles.card}>
Security-Enhanced Linux. A security module for the Linux kernel.
</div>

### AppArmor
<div className={styles.card}>
An application security system for Linux.
</div>

### Docker Swarm
<div className={styles.card}>
A container orchestration tool from Docker.
</div>

### Podman
<div className={styles.card}>
A container engine similar to Docker.
</div>

### LXC
<div className={styles.card}>
Linux Containers. A containerization technology for Linux.
</div>

### LXD
<div class={styles.card}>
A container management daemon for LXC.
</div>

### Zabbix
<div className={styles.card}>
An open-source monitoring solution.
</div>

### Nagios
<div className={styles.card}>
An open-source monitoring solution.
</div>

### Icinga
<div className={styles.card}>
An open-source monitoring solution.
</div>

### Graylog
<div className={styles.card}>
An open-source log management system.
</div>

### Splunk
<div className={styles.card}>
A commercial log management system.
</div>

### Ansible Tower
<div className={styles.card}>
A web-based UI for Ansible.
</div>

### Puppet
<div className={styles.card}>
An open-source configuration management tool.
</div>

### Chef
<div className={styles.card}>
An open-source configuration management tool.
</div>

### SaltStack
<div className={styles.card}>
An open-source configuration management tool.
</div>

### Terraform Cloud
<div className={styles.card}>
A cloud-based platform for Terraform.
</div>

### Packer
<div className={styles.card}>
A tool for creating machine images.
</div>

### Vagrant
<div className={styles.card}>
A tool for creating and managing virtual development environments.
</div>

### Git
<div className={styles.card}>
A distributed version control system.
</div>

### GitHub
<div className={styles.card}>
A web-based platform for version control and collaboration.
</div>

### GitLab
<div className={styles.card}>
A web-based platform for version control and collaboration.
</div>

### Bitbucket
<div className={styles.card}>
A web-based platform for version control and collaboration.
</div>

### Jenkins
<div className={styles.card}>
An open-source automation server.
</div>

### Bamboo
<div className={styles.card}>
A commercial CI/CD server.
</div>

### CircleCI
<div className={styles.card}>
A cloud-based CI/CD platform.
</div>

### Travis CI
<div className={styles.card}>
A cloud-based CI/CD platform.
</div>

### Drone CI
<div className={styles.card}>
An open-source CI/CD platform.
</div>

### Argo CD
<div className={styles.card}>
A declarative GitOps continuous delivery tool for Kubernetes.
</div>

### Flux
<div className={styles.card}>
A GitOps operator for Kubernetes.
</div>

### Prometheus Alertmanager
<div className={styles.card}>
A tool for handling alerts from Prometheus.
</div>

### Grafana Alerting
<div className={styles.card}>
A tool for handling alerts from Grafana.
</div>

### PagerDuty
<div className={styles.card}>
An incident management platform.
</div>

### Opsgenie
<div className={styles.card}>
An incident management platform.
</div>

### SRE
<div className={styles.card}>
Site Reliability Engineering. A discipline that applies software engineering principles to infrastructure and operations.
</div>

### DevOps
<div className={styles.card}>
A set of practices that combines software development and IT operations.
</div>

### ITIL
<div className={styles.card}>
Information Technology Infrastructure Library. A framework for IT service management.
</div>

### RAID Controller
<div className={styles.card}>
A hardware or software component that manages RAID arrays.
</div>

### HBA
<div className={styles.card}>
Host Bus Adapter. A hardware component that connects a host system to storage devices.
</div>

### SAS
<div className={styles.card}>
Serial Attached SCSI. A computer bus interface for storage devices.
</div>

### NVMe over Fabrics
<div className={styles.card}>
A protocol for accessing NVMe storage over a network.
</div>

### RDMA
<div className={styles.card}>
Remote Direct Memory Access. A technology for high-speed data transfer between systems.
</div>

### Infiniband
<div className={styles.card}>
A high-speed network interconnect technology.
</div>

### Fibre Channel
<div className={styles.card}>
A high-speed network technology for storage devices.
</div>

### SAN Switch
<div className={styles.card}>
A network switch for SANs.
</div>

### NAS Appliance
<div className={styles.card}>
A dedicated hardware device for NAS.
</div>

### Backup Server
<div className={styles.card}>
A server dedicated to backing up data.
</div>

### Offsite Backup
<div className={styles.card}>
A backup stored in a different location than the primary data.
</div>

### Incremental Backup
<div className={styles.card}>
A backup that only includes changes since the last backup.
</div>

### Differential Backup
<div className={styles.card}>
A backup that includes changes since the last full backup.
</div>

### Full Backup
<div className={styles.card}>
A backup that includes all data.
</div>

### Snapshot
<div className={styles.card}>
A point-in-time copy of data.
</div>

### Replication
<div className={styles.card}>
The process of copying data to multiple locations.
</div>

### Disaster Recovery
<div className={styles.card}>
The process of recovering data and systems after a disaster.
</div>

### Business Continuity
<div className={styles.card}>
The process of ensuring that business operations can continue during and after a disaster.
</div>

### RPO
<div className={styles.card}>
Recovery Point Objective. The maximum amount of data loss that is acceptable.
</div>

### RTO
<div className={styles.card}>
Recovery Time Objective. The maximum amount of time that it should take to recover from a disaster.
</div>

---
sidebar_position: 3
title: "Essential Software Catalog 📊"
description: "Comprehensive list of popular self-hosted software solutions"
---

import styles from '../../src/css/styles.module.css';

# Essential Software Catalog 📊

A curated collection of popular self-hosted software solutions for your home server.

## 🛡️ Ad Blocking & DNS

<div className={styles.gridContainer}>
  <div className={styles.card}>
    <h3>Pi-hole</h3>
    Network-wide ad blocking solution that acts as a DNS sinkhole to block unwanted content before it reaches your devices.
  </div>
  
  <div className={styles.card}>
    <h3>AdGuard Home</h3>
    Network-wide software for blocking ads & tracking, offering encrypted DNS and parental controls with a sleek interface.
  </div>

  <div className={styles.card}>
    <h3>Unbound</h3>
    Validating, recursive, and caching DNS resolver that provides enhanced privacy and security for your network.
  </div>
</div>

## 🎬 Arr Suite & Media Management

<div className={styles.gridContainer}>
  <div className={styles.card}>
    <h3>Sonarr</h3>
    Smart PVR for monitoring and managing TV series, automatically detecting and downloading new episodes as they become available.
  </div>

  <div className={styles.card}>
    <h3>Radarr</h3>
    Movie collection manager that can monitor multiple RSS feeds for new movies and interface with downloaders and media servers.
  </div>

  <div className={styles.card}>
    <h3>Lidarr</h3>
    Music collection manager and automation tool that works with various download clients and music sources.
  </div>

  <div className={styles.card}>
    <h3>Prowlarr</h3>
    Indexer manager/proxy that integrates with various arr's, supporting both Torrent Trackers and Usenet Indexers.
  </div>

  <div className={styles.card}>
    <h3>Bazarr</h3>
    Companion application that manages and downloads subtitles automatically for your media library.
  </div>
</div>

## 🏠 Home Automation

<div className={styles.gridContainer}>
  <div className={styles.card}>
    <h3>Home Assistant</h3>
    Open source home automation platform that puts local control and privacy first, supporting thousands of devices and services.
  </div>

  <div className={styles.card}>
    <h3>Node-RED</h3>
    Flow-based programming tool for connecting hardware devices, APIs, and online services in new and interesting ways.
  </div>

  <div className={styles.card}>
    <h3>OpenHAB</h3>
    Vendor and technology agnostic home automation software that integrates different home automation systems and technologies.
  </div>
</div>

## 📊 Dashboards

<div className={styles.gridContainer}>
  <div className={styles.card}>
    <h3>Heimdall</h3>
    Application dashboard and launcher designed to organize your web applications into a simple interface.
  </div>

  <div className={styles.card}>
    <h3>Organizr</h3>
    HTPC/Homelab services organizer that allows you to access your applications in one place.
  </div>

  <div className={styles.card}>
    <h3>Homer</h3>
    Simple static homepage for your server that can be easily configured using a YAML file.
  </div>

  <div className={styles.card}>
    <h3>Dashy</h3>
    Feature-rich dashboard with authentication, status checks, themes, and widgets support.
  </div>
</div>

## 💾 Databases

<div className={styles.gridContainer}>
  <div className={styles.card}>
    <h3>PostgreSQL</h3>
    Powerful, open source object-relational database system with strong reputation for reliability and data integrity.
  </div>

  <div className={styles.card}>
    <h3>MariaDB</h3>
    Community-developed fork of MySQL that guarantees to stay open source, offering enhanced performance and features.
  </div>

  <div className={styles.card}>
    <h3>MongoDB</h3>
    Document-based distributed database built for modern application developers and for the cloud era.
  </div>

  <div className={styles.card}>
    <h3>InfluxDB</h3>
    Purpose-built time series database for storing metrics, events, and real-time analytics.
  </div>
</div>

## 🐳 Containers & Orchestration

<div className={styles.gridContainer}>
  <div className={styles.card}>
    <h3>Docker</h3>
    Platform for developing, shipping, and running applications in containers, making it easy to deploy and scale applications.
  </div>

  <div className={styles.card}>
    <h3>Kubernetes</h3>
    Production-grade container orchestration system for automating deployment, scaling, and management of containerized applications.
  </div>

  <div className={styles.card}>
    <h3>Portainer</h3>
    Lightweight management UI for Docker environments that makes it easy to manage containers, images, networks, and volumes.
  </div>

  <div className={styles.card}>
    <h3>K3s</h3>
    Lightweight Kubernetes distribution perfect for edge, IoT, and small-scale deployments.
  </div>
</div>

## 🎥 Media Servers

<div className={styles.gridContainer}>
  <div className={styles.card}>
    <h3>Plex</h3>
    Comprehensive media server that organizes video, music, and photos, providing streaming access across devices with a polished interface.
  </div>

  <div className={styles.card}>
    <h3>Jellyfin</h3>
    Open source alternative to Plex that lets you control and manage your media with no strings attached.
  </div>

  <div className={styles.card}>
    <h3>Emby</h3>
    Media server that brings your home videos, music, and photos together into one place, with apps on multiple platforms.
  </div>

  <div className={styles.card}>
    <h3>Navidrome</h3>
    Modern music server and streamer compatible with Subsonic/Airsonic clients, supporting many audio formats.
  </div>
</div>

## 📈 Monitoring & Analytics

<div className={styles.gridContainer}>
  <div className={styles.card}>
    <h3>Grafana</h3>
    Analytics and interactive visualization platform that lets you query, visualize, and alert on your metrics.
  </div>

  <div className={styles.card}>
    <h3>Prometheus</h3>
    Open-source monitoring and alerting toolkit designed for reliability and scalability.
  </div>

  <div className={styles.card}>
    <h3>Uptime Kuma</h3>
    Self-hosted monitoring tool that provides real-time status for HTTP(s), TCP, DNS, and other protocols.
  </div>

  <div className={styles.card}>
    <h3>Netdata</h3>
    Distributed, real-time performance and health monitoring for systems and applications.
  </div>
</div>

## 🔧 System Tools

<div className={styles.gridContainer}>
  <div className={styles.card}>
    <h3>Cloudflare Tunnel</h3>
    Secure way to connect your resources to Cloudflare without a public IP or opening ports.
  </div>

  <div className={styles.card}>
    <h3>Tailscale</h3>
    Zero config VPN that makes the devices and applications you own accessible anywhere in the world.
  </div>

  <div className={styles.card}>
    <h3>Vaultwarden</h3>
    Lightweight Bitwarden server implementation written in Rust, perfect for self-hosted password management.
  </div>

  <div className={styles.card}>
    <h3>WireGuard</h3>
    Modern VPN that aims to be faster, simpler, leaner, and more useful than IPsec.
  </div>
</div>

:::tip Keep Growing
This list represents just a small selection of available self-hosted software. The open-source community continuously develops new solutions.
:::

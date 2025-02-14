// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lab & Server',
  tagline: 'For those who want to learn and build together',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://labandserver.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'labandserver', // Usually your GitHub org/user name.
  projectName: 'homepage', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          remarkPlugins: [],
          rehypePlugins: [],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        contextualSearch: true,
        appId: 'IJD09FO4GG',
        apiKey: '6275b250a8e81bd6c5dda9ba9b42867f',
        indexName: 'labandserver_com_ijd09fo4gg_pages',
      },

      navbar: {
        title: 'Lab & Server',
        logo: {
          alt: 'Lab & Server Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'Quick_Start',
            position: 'left',
            label: 'Quick Start',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Hardware',
            position: 'left',
            label: 'Hardware',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Software',
            position: 'left',
            label: 'Software',
          },
          {
            type: 'docSidebar',
            sidebarId: 'Glossary',
            position: 'left',
            label: 'Glossary',
          },
          {
            to: '/server-quiz',
            label: 'Server Quiz',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Quick Start',
                to: '/quick_start/getting_started/labs-and-servers',
              },
              {
                label: 'Hardware',
                to: '/hardware/Hardware Options/comparison',
              },
              {
                label: 'Software',
                to: '/software/operating-system',
              },
              {
                label: 'Glossary',
                to: '/glossary/intro',
              },
              {
                label: 'Server Quiz',
                to: '/server-quiz',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Ko-Fi',
                href: 'https://ko-fi.com/labandserver',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/K69n3bYD',
              },
            ],
          },
          {
            title: 'Reddit Subs',
            items: [
              {
                label: 'Home Lab',
                href: 'https://www.reddit.com/r/homelab/',
              },
              {
                label: 'Home Server',
                href: 'https://www.reddit.com/r/homeserver/',
              },
              {
                label: 'Self Hosted',
                href: 'https://www.reddit.com/r/selfhosted/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lab & Server`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

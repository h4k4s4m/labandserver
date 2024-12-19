# 🏠 Lab and Server Website

Welcome to the ultimate resource for home lab enthusiasts and IT professionals! Whether you're building your first home server or managing a sophisticated homelab setup, we've got you covered. From beginner-friendly guides to advanced automation solutions, this documentation hub helps you build and maintain your perfect home infrastructure.

## 🚀 Tech Stack

- **[Docusaurus 3](https://docusaurus.io/)** - Modern static website generator
- **React** - UI components and interactive features
- **MDX** - Enhanced Markdown with React components
- **[unDraw](https://undraw.co/)** - Open-source illustrations

## ☕ Support

If you find this project helpful, consider supporting it on Ko-fi:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/labandserver)

## 🛠️ Development

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install
```

### Local Development

```bash
# Start development server
npm start
```

This starts a local dev server at `http://localhost:3000`. Most changes are reflected live without needing to restart the server.

### Building

```bash
# Generate static files
npm run build

# Test the built site locally
npm run serve
```

The static files are generated in the `build` directory.

## 📦 Deployment

This site is automatically deployed to Cloudflare Pages using GitHub Actions. The deployment process:

1. Triggers on push to the main branch
2. Builds the static site using `npm run build`
3. Deploys to Cloudflare Pages automatically

To deploy manually:

```bash
# Build the static site
npm run build

# The site will be in the 'build' directory
# Deploy this directory to your hosting platform
```

Required environment variables for GitHub Actions:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## 🎨 Design Assets

The illustrations used in this project are from [unDraw](https://undraw.co/), an open-source illustration library. The SVG files have been customized to match our color scheme.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Create a pull request


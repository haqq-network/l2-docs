# Documentation Template

This is a Docusaurus-based documentation site template, similar to the HAQQ docs structure.

## Installation

```bash
pnpm install
```

## Local Development

```bash
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true pnpm deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> pnpm deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Configuration

- Update `docusaurus.config.js` with your project details
- Update `package.json` with your repository and author information
- Customize the theme in `src/css/custom.css`
- Add your documentation files in the `docs/` directory

## Features

- Docusaurus 3.9.2
- React 19.2.1
- TypeScript 5.9.3
- Tailwind CSS 4.1.17
- PostHog analytics integration
- Sitemap generation
- Dark mode support


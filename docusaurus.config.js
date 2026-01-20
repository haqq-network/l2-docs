// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.vsDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HAQQ L2 Documentation',
  tagline: 'HAQQ L2 is a scalable and interoperable Ethereum L2, built on HAQQ Network.',
  url: 'https://l2-docs.haqq.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    project: {
      name: 'HAQQ Network',
      short_name: 'HAQQ',
      denom: 'ETH',
      ticker: 'ETH',
      binary: 'haqqd',
      testnet_denom: 'ETH',
      testnet_ticker: 'ETH',
      rpc_url: 'https://explorer.ethiq.haqq.network/',
      rpc_url_testnet: 'https://explorer.testethiq.haqq.network/',
      testnet_chain_id: '853211',
      block_explorer_url: 'https://explorer.ethiq.haqq.network/',
      eth_name: 'Ethereum',
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/haqq-network/docs/tree/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          lastmod: 'datetime',
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  plugins: [
    [
      'posthog-docusaurus',
      {
        apiKey: 'phc_S8yvZufvPSBgyfXwjP2nIzndGES4HV8i0yOxMecUkLE',
        appUrl: process.env.POSTHOG_APP_URL || 'https://eu.posthog.com',
        enableInDevelopment: false,
      },
    ],
    async function tailwindPlugin() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('@tailwindcss/postcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'XACAKO6XLW',
        // Public API key: it is safe to commit it
        apiKey: 'd30587dac55c28a41cd6aa97878d6e23',
        indexName: 'Haqq Network Documentation',
        // Optional: Contextual search is enabled by default
        contextualSearch: true,
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
        // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
        insights: false,
        // Optional: whether you want to use the new Ask AI feature (undefined by default)
        askAi: 'FL4BAnVxGzJD',
      },
      metadata: [
        {
          name: 'keywords',
          content:
            'HAQQ, blockchain, ethereum, proof of stake, validator, documentation, islamic blockchain, L2',
        },
        {
          name: 'description',
          content:
            'HAQQ L2 is a scalable and interoperable Ethereum L2 blockchain. Explore our comprehensive documentation.',
        },
        {
          property: 'og:title',
          content:
            'HAQQ L2 Documentation - Ethereum Compatible L2 Platform',
        },
        {
          property: 'og:description',
          content:
            'HAQQ L2 is a scalable and interoperable Ethereum L2 blockchain. Explore our comprehensive documentation.',
        },
        {
          name: 'sitemap',
          content: '/sitemap.xml',
        },
      ],
      // Replace with your project's social card
      // image: 'img/haqq-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'ETHIQ',
          src: 'img/ethiq-logo.svg',
          srcDark: 'img/ethiq-logo.svg',
        },
        items: [
          {
            href: 'https://github.com/haqq-network/haqq',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                href: '/docs/intro',
                label: 'Introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'HAQQ Network Discord',
                href: 'https://discord.gg/CDtXuQG3Vd',
              },
              {
                label: 'Islamic Coin Discord',
                href: 'https://discord.gg/islamiccoin',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/The_HaqqNetwork',
              },
              {
                href: 'https://github.com/haqq-network/haqq',
                label: 'GitHub',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HAQQ Network`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'powershell',
          'shell-session',
          'bash',
          'solidity',
          'typescript',
          'toml',
          'yaml',
          'json',
        ],
      },
    }),
};

module.exports = config;


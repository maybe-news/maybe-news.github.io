// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Maybe News',
  tagline: '可能是新闻的知识',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // Set the production url of your site here
  url: 'https://maybe.news',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'maybe-news', // Usually your GitHub org/user name.
  projectName: 'maybe-news.github.io', // Usually your repo name.

  deploymentBranch: 'main',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          blogTitle: 'Issues',
          routeBasePath: 'issues',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'Maybe News - Issues',
            description: '可能是新闻的知识',
            language: 'zh-CN',
            copyright: `Copyright © ${new Date().getFullYear()} Maybe News`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: 'G-FS15RZL4X6',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Maybe News',
        items: [
          { to: 'issues', label: 'Issues', position: 'left', activeBasePath: 'issues' },
          {
            type: 'dropdown',
            label: 'Series',
            position: 'left',
            items: [
              { label: '连接：互联网简史', to: '/series/tags/dail-up' },
            ],
          },
          { to: 'sponsor', label: 'Sponsor', position: 'left' },
          { to: 'about', label: 'About', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Maybe News. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'series',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'series',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './series',

        blogTitle: 'Series',
        showReadingTime: true,
        feedOptions: {
          type: 'all',
          title: 'Maybe News - Series',
          description: '可能是新闻的知识',
          language: 'zh-CN',
          copyright: `Copyright © ${new Date().getFullYear()} Maybe News`,
        },
      },
    ],
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i,900,900i|Nanum+Gothic+Coding:400,400i,700,700i,900,900i|Neuton:400,400i,700,700i,900,900i',
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en', 'zh'],
        indexDocs: false,
        indexBlog: true,
        blogDir: ['blog', 'series'],
        blogRouteBasePath: ['/issues', '/series'],
        searchResultLimits: 10,
      },
    ],
  ],
};

module.exports = config;

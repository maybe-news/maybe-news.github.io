/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Maybe News',
  tagline: '可能是新闻的知识',
  url: 'https://www.maybe.news',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'maybe-news', // Usually your GitHub org/user name.
  projectName: 'maybe-news.github.io', // Usually your repo name.
  deploymentBranch: 'master',
  trailingSlash: false,
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i,900,900i|Nanum+Gothic+Coding:400,400i,700,700i,900,900i|Neuton:400,400i,700,700i,900,900i',
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      title: 'Maybe News',
      items: [
        {to: 'issues', label: 'Issues', position: 'left', activeBasePath: 'issues'},
        {
          type: 'dropdown',
          label: 'Series',
          position: 'left',
          items: [
            {label: '连接：互联网简史', to: '/series/tags/dail-up'},
          ],
        },
        {to: 'sponsor', label: 'Sponsor', position: 'left'},
        {to: 'about', label: 'About', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Maybe News. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          blogTitle: 'Issues',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Archives',
          routeBasePath: 'issues',
          showReadingTime: false,
          feedOptions: {
            type: 'all',
            title: 'Maybe News - Issues',
            description: '可能是新闻的知识',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        googleAnalytics: {
          trackingID: 'UA-26507501-4',
        },
        gtag: {
          trackingID: 'G-FS15RZL4X6',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
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
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Archives',
        showReadingTime: false,
        feedOptions: {
          type: 'all',
          title: 'Maybe News - Series',
          description: '可能是新闻的知识',
        },
      },
    ],
  ],
};

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
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i,900,900i|Nanum+Gothic+Coding:400,400i,700,700i,900,900i|Neuton:400,400i,700,700i,900,900i',
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      title: 'Maybe News',
      // logo: {
      //   alt: 'Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {to: 'issues', label: 'Issues', position: 'left', activeBasePath: 'issues'},
        {to: 'about', label: 'About', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Getting Started',
        //       to: 'docs/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Maybe News. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          blogTitle: 'Issues',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Archives',
          routeBasePath: 'issues',
          showReadingTime: false,
          feedOptions: {
            type: 'all',
            title: 'Maybe News',
            description: 'Maybe News',
          },
        },
        googleAnalytics: {
          trackingID: 'UA-26507501-4',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

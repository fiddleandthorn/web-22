const queries = require('./src/utils/algolia');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Fiddle & Thorn",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://fiddle-thorn-gatsby.local/graphql",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
          name: 'Fiddle & Thorn',
          short_name: 'FiddleandThorn',
          start_url: '/',
          background_color: '#fefdfb',
          theme_color: '#f1b725',
          display: 'standalone',
          icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: 'EI6OE07SUV',
        apiKey: 'fd2ff09fbd22b6cde6a5496f25798923',
        queries,
        chunkSize: 10000,
      },
    },
    "gatsby-plugin-preact",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-212198410-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    'gatsby-plugin-loadable-components-ssr',
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

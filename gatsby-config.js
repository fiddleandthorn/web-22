const queries = require('./src/utils/algolia');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://fiddleandthorn.com",
    title: "Fiddle & Thorn",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        production: {
          hardCacheMediaFiles: true,
        },
        develop: {
          hardCacheMediaFiles: true,
          // hardCacheData: true,
        },
        url: "https://cms.fiddleandthorn.com/graphql",
        schema: {
          perPage: 20, // currently set to 100
          requestConcurrency: 5, // currently set to 15
          previewRequestConcurrency: 2, // currently set to 5
          timeout: 10000000,
        }
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
          name: 'Fiddle & Thorn',
          short_name: 'FiddleandThorn',
          start_url: '/',
          background_color: '#fefdfb',
          theme_color: '#fefdfb',
          display: 'standalone',
          icon: 'src/images/icon-square.png',
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000,
      },
    },
    "gatsby-plugin-preact",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "UA-152101441-2",
          "G-LTJV33Q1Y6"
        ]
      },
    },
    {
    resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PBD43KP",
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://fiddleandthorn.com`,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
              {
                allSitePage {
                  nodes {
                    path
                  }
                }
                allWpContentNode(filter: {nodeType: {in: ["Post", "Page", "Plant"]}}) {
                  nodes {
                    ... on WpPost {
                      uri
                      modifiedGmt
                    }
                    ... on WpPage {
                      uri
                      modifiedGmt
                    }
                    ... on WpPlant {
                      uri
                      modifiedGmt
                    }
                  }
                }
              }
        `,
        resolveSiteUrl: () => "https://fiddleandthorn.com",
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allWpContentNode: { nodes: allWpNodes },
        }) => {
          const wpNodeMap = allWpNodes.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          return allPages.map(page => {
            return { ...page, ...wpNodeMap[page.path] }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://fiddleandthorn.com',
        sitemap: 'https://fiddleandthorn.com/sitemap/sitemap-0.xml',
        policy: [{ userAgent: '*' }]
      }
    },
    'gatsby-plugin-loadable-components-ssr',
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-client-side-redirect`,
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

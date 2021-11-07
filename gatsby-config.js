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
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-SWQ9P0BHT1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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

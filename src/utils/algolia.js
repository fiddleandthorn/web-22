

const indexQuery = `{
    allWpPost {
       edges {
         node {
           id
           title
           date
           uri
         }
       }
     }
     allWpPlant {
        edges {
          node {
            id
            title
            uri
          }
        }
      }
}`;

const flatten = (arr) =>
      arr.map(({ node: { ...rest } }) => ({
          ...rest
      }));

const settings = {};

const queries = [
    {
        query: indexQuery,
        transformer: ({ data }) => flatten(data.allWpPost.edges),
        indexName: `Posts`,
        settings
    },
    {
        query: indexQuery,
        transformer: ({ data }) => flatten(data.allWpPlant.edges),
        indexName: `Plants`,
        settings
    }
];

module.exports = queries;

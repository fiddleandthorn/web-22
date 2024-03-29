const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const { paginate } = require("gatsby-awesome-pagination")

const redirects = require("./redirects.json");

exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  // Get and Create All Posts
  //////////////////////////////////////////////////////////////////////////////

  const {
    data: {
      allWpPost: { nodes: allPosts },
    },
  } = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)

  const posts = allPosts

  const postTemplate = path.resolve(`./src/templates/post.js`)

  allPosts.forEach(post => {
    createPage({
      // will be the url for the page
      path: post.uri,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
      },
    })
  })

  // Get and Create All Authors
  //////////////////////////////////////////////////////////////////////////////

  const {
    data: {
      allWpUser: { nodes: allUsers },
    },
  } = await graphql(`
    query {
      allWpUser {
        nodes {
          slug
          id
        }
      }
    }
  `)

  const users = allUsers

  const userTemplate = path.resolve(`./src/templates/user.js`)

  allUsers.forEach(user => {
    createPage({
      // will be the url for the page
      path: "/about-us/" + user.slug,
      // specify the component template of your choice
      component: slash(userTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: user.id,
      },
    })
  })


  // Get and Create All  Categories
  //////////////////////////////////////////////////////////////////////////////

  const {
    data: {
      allWpCategory: { nodes: allCategories },
    },
  } = await graphql(`
    query {
      allWpCategory {
        nodes {
          id
          name
          slug
          count
        }
      }
    }
  `)

  const categoryTemplate = path.resolve(`./src/templates/category.js`)

  const excludeCategories = ['plant-care-guides']

  allCategories.forEach(category => {
    if (!excludeCategories.includes(category.slug)) {
      const postsPerPage = 15
      const numPages = Math.ceil(category.count / postsPerPage)

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? "/journal/" + category.slug : "/journal/" + category.slug + "/" + (i + 1),
          component: slash(categoryTemplate),
          context: {
            id: category.id,
            name: category.name,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })
    }
  })


  // Get and Create All Plants
  //////////////////////////////////////////////////////////////////////////////

  const {
    data: {
      allWpPlant: { nodes: allPlants },
    },
  } = await graphql(`
    query {
      allWpPlant {
        nodes {
          id
          uri
        }
      }
    }
  `)

  const plantTemplate = path.resolve(`./src/templates/plant.js`)

  const excludePlants = [
    '/plants/ponytail-palm/',
    '/plants/sago-palm/',
    '/plants/lucky-bamboo/',
    '/plants/weeping-fig/',
    '/plants/cactus/',
    '/plants/hosta/',
    '/plants/fan-palm/',
    '/plants/english-ivy/',
    '/plants/cast-iron-plant/',
    '/plants/air-plant/',
    '/plants/jade-plant/',
    '/plants/boston-fern/',
    '/plants/birds-nest-fern/',
    '/plants/hoya-carnosa/',
    '/plants/string-of-hearts/',
    '/plants/aloe-vera/',
    '/plants/asparagus-fern/',
    '/plants/hoya-linearis/',
    '/plants/snake-plant/',
    '/plants/zz-plant/',
    '/plants/spider-plant/',
    '/plants/yucca/',
    '/plants/parlour-palm/',
    '/plants/string-of-pearls/',
    '/plants/peace-lily/',
    '/plants/dragon-tree/',
    '/plants/money-tree/'
  ]

  allPlants.forEach(plant => {
    if (!excludePlants.includes(plant.uri)) {
      createPage({
        // will be the url for the page
        path: plant.uri,
        // specify the component template of your choice
        component: slash(plantTemplate),
        // In the ^template's GraphQL query, 'id' will be available
        // as a GraphQL variable to query for this post's data.
        context: {
          id: plant.id,
        },
      })
    }
  })


  // Get and Create All Plant Categories
  //////////////////////////////////////////////////////////////////////////////

  const {
    data: {
      allWpPlantCategory: { nodes: allPlantCategories },
    },
  } = await graphql(`
    query {
      allWpPlantCategory {
        nodes {
          id
          name
          slug
        }
      }
    }
  `)

  const plantCategoryTemplate = path.resolve(`./src/templates/plantCategory.js`)


  allPlantCategories.forEach(plantCategory => {
      createPage({
        // will be the url for the page
        path: "/plants/categories/" + plantCategory.slug,
        // specify the component template of your choice
        component: slash(plantCategoryTemplate),
        // In the ^template's GraphQL query, 'id' will be available
        // as a GraphQL variable to query for this post's data.
        context: {
          id: plantCategory.id,
          name: plantCategory.name
        },
      })
  })


  // Get and Create All Pages
  //////////////////////////////////////////////////////////////////////////////

  const {
    data: {
      allWpPage: { nodes: allPages },
    },
  } = await graphql(`
    query {
      allWpPage {
        nodes {
          id
          uri
        }
      }
    }
  `)

  // const pageTemplate = path.resolve(`./src/templates/page.js`)
  //
  // const excludeURIs = ['/plants/', '/journal/', '/homepage/']
  //
  // allPages.forEach(page => {
  //   if (!excludeURIs.includes(page.uri)) {
  //     createPage({
  //       // will be the url for the page
  //       path: page.uri,
  //       // specify the component template of your choice
  //       component: slash(pageTemplate),
  //       // In the ^template's GraphQL query, 'id' will be available
  //       // as a GraphQL variable to query for this post's data.
  //       context: {
  //         id: page.id,
  //       },
  //     })
  //   }
  // })


  const { createRedirect } = actions;

	redirects.forEach(redirect =>
		createRedirect({
	    fromPath: redirect.fromPath,
	    toPath: redirect.toPath,
      isPermanent: true
	  })
	);


}


const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}

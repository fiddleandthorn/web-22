import * as React from "react"
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"

import "../assets/css/blog.css"

import Layout from '../components/layout.js';
import Pagination from '../components/pagination.js';


// markup
const CategoryPage = ({ data, pageContext }) => {

  const headerImage = getImage(data.wpCategory.journalCategories.journalTopImage.localFile)
  const categories = data.allWpCategory.nodes
  var posts = data.allWpPost.nodes;

  return (
    <Layout>

      <Helmet>
        <title>{data.wpCategory.journalCategories.journalTitle} | Our Journal | Fiddle & Thorn</title>
        <meta property="og:title" content={data.wpCategory.journalCategories.journalTitle + " | Plants Index | Fiddle & Thorn"} />
        <meta property="og:site_name" content="Fiddle & Thorn" />
        <meta property="og:url" content={"https://fiddleandthorn.com/journal/" + data.wpCategory.slug} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={data.wpCategory.journalCategories.journalTopImage.sourceUrl} />
        <meta property="description" content={"desc"} />
        <meta property="og:description" content={"desc"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="fiddleandthorn.com" />
        <meta property="twitter:url" content={"https://fiddleandthorn.com/journal/" + data.wpCategory.slug} />
        <meta name="twitter:title" content={data.wpCategory.journalCategories.journalTitle + " | Plants Index | Fiddle & Thorn"} />
        <meta name="twitter:description" content={"desc"} />
        <meta name="twitter:image" content={data.wpCategory.journalCategories.journalTopImage.sourceUrl} />
      </Helmet>

      <div className="plant-header big-header">
        <GatsbyImage image={headerImage} alt="Plants Index" />
        <div className="container">
          <div className="full">
            <h1>{data.wpCategory.journalCategories.journalTitle}</h1>
            <h3>{data.wpCategory.journalCategories.journalSubtitle}</h3>
          </div>
        </div>
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="#FEFDFB"></path></svg>
      </div>

      <div className="categories">
        <div className="container">
          <div className="full">
            <div className="category-navigation">
              {categories.map((category) => {
                if (category.name != "Uncategorized") {
                  if (pageContext.name === category.name) {
                    return (
                      <a className="badge" href={"/journal/" + category.slug}>{category.name}</a>
                    )
                  } else {
                    return (
                      <a className="badge-light" href={"/journal/" + category.slug}>{category.name}</a>
                    )
                  }
                }
              })}
            </div>
          </div>
        </div>
      </div>


      <div className="">
        <div className="container related-posts-cards">
            {posts.map((post, index) => {
              var postImage = getImage(post.acfPostData.blogMainImage.localFile);
              return (
                <div className="third">
                  <div className="card">
                    <a href={post.uri}>
                      <div href={post.uri} className="card-image">
                        <GatsbyImage image={postImage} alt={post.title} />
                        <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="white"></path></svg>
                      </div>
                    </a>
                    <div className="card-body">
                      <p className="h4"><a href={post.uri}>{post.title}</a></p>
                      <div className="blog-categories">
                        {post.categories.nodes.map(category => {
                          if (category.name !== "All") {
                            return (
                              <a href={category.uri} className="badge">{category.name}</a>
                            )
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
       </div>
      </div>

      {pageContext.numPages > 1 &&
        <Pagination routeURL={"/journal/" + data.wpCategory.slug} currentPage={pageContext.currentPage} numPages={pageContext.numPages}/>
      }




    </Layout>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


export const query = graphql`
  query($id: String!, $skip: Int!, $limit: Int!) {
    wpCategory(id: {eq: $id}) {
      slug
      journalCategories {
        journalSubtitle
        journalTitle
        journalTopImage {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData (
                width: 1400
                aspectRatio: 2.2222
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
                quality: 40
              )
            }
          }
        }
      }
    }
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $limit
      skip: $skip
      filter: {categories: {nodes: {elemMatch: {id: {eq: $id}}}}}
    ) {
      nodes {
        id
        title
        uri
        date
        acfPostData {
          blogMainImage {
            localFile {
              childImageSharp {
                gatsbyImageData (
                  width: 700
                  aspectRatio: 1.333
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                  quality: 50
                )
              }
            }
          }
        }
        categories {
          nodes {
            name
            uri
          }
        }
      }
    }
    allWpCategory {
      nodes {
        name
        slug
      }
    }
  }
`;

export default CategoryPage

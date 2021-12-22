import * as React from "react"
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick";
import Helmet from "react-helmet"

import "../assets/css/slick.css"

import Layout from '../components/layout.js';


// markup
const JournalPage = ({ data }) => {

  const headerImage = getImage(data.wpPage.journalPage.journalTopImage.localFile)
  const categories = data.allWpCategory.nodes

  const recentPosts = data.allWpPost.nodes
  const propagationPosts = data.propagationPosts.nodes
  const popularPosts = data.wpPage.journalPage.popularPosts

  const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <Layout>

      <Helmet>
        <title>Our Houseplant Journal | Fiddle & Thorn</title>
        <meta property="og:title" content={"Our Houseplant Journal | Fiddle & Thorn"} />
        <meta property="og:site_name" content="Fiddle & Thorn" />
        <meta property="og:url" content={"https://fiddleandthorn.com/journal/"} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={data.wpPage.journalPage.journalTopImage.sourceUrl} />
        <meta property="description" content={"Take a look at what we've been writing recently. There's a wide range of posts about all kinds of houseplants, something for everyone!"} />
        <meta property="og:description" content={"Take a look at what we've been writing recently. There's a wide range of posts about all kinds of houseplants, something for everyone!"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="fiddleandthorn.com" />
        <meta property="twitter:url" content={"https://fiddleandthorn.com/journal/"} />
        <meta name="twitter:title" content={"Our Houseplant Journal | Fiddle & Thorn"} />
        <meta name="twitter:description" content={"Take a look at what we've been writing recently. There's a wide range of posts about all kinds of houseplants, something for everyone!"} />
        <meta name="twitter:image" content={data.wpPage.journalPage.journalTopImage.sourceUrl} />
      </Helmet>

      <div className="plant-header big-header">
        <GatsbyImage image={headerImage} alt="Plants Index" />
        <div className="container">
          <div className="full">
            <h1>{data.wpPage.journalPage.journalTitle}</h1>
            <h3>{data.wpPage.journalPage.journalSubtitle}</h3>
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
                    return (
                      <a className="badge-light" href={"/journal/" + category.slug}>{category.name}</a>
                    )
                }
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="latest-post">
        <div className="container related-posts-cards">
            {recentPosts.slice(0, 1).map((post, index) => {
              var postImage = getImage(post.acfPostData.blogMainImage.localFile);
              return (
                <div className="full">
                  <div className="card wide-card">
                    <a href={post.uri} className="image-wrapper">
                      <div href={post.uri} className="card-image">
                        <GatsbyImage image={postImage} alt={post.title} />
                        <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="white"></path></svg>
                      </div>
                    </a>
                    <div className="card-body">
                      <p className="h4"><a href={post.uri}>{post.title}</a></p>
                      <p className="text-muted"><a href={post.uri}>{post.acfPostData.blogShortDescription}</a></p>
                      <hr />
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

      <div className="recent-posts">

        <div className="container">
          <div className="full title-row">
            <span className="title-left">
              <h4>Latest Entries</h4>
              <p className="text-muted">Here's what we've been writing about recently...</p>
            </span>
            <a href="/journal/all" className="button-light">View All</a>
          </div>
        </div>
        <div className="container">
          <div className="full">
            <hr />
          </div>
        </div>

        <div className="container related-posts-cards">
            {recentPosts.slice(1, 4).map((post, index) => {
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

      <div className="category-spotlight">

        <div className="container">
          <div className="full title-row">
            <span className="title-left">
              <h4>Propagation Spotlight</h4>
              <p className="text-muted">In-depth looks at propagating your houseplants.</p>
            </span>
            <a href="/journal/propagation" className="button-light">View All</a>
          </div>
        </div>
        <div className="container">
          <div className="full">
            <hr />
          </div>
        </div>

        <div className="container related-posts-cards">
          <Slider {...settings}>
            {propagationPosts.map((post, index) => {
              var postImage = getImage(post.acfPostData.blogMainImage.localFile);
              return (
                <div className="full">
                  <div className="card wide-card">
                    <a href={post.uri} class="image-wrapper">
                      <div href={post.uri} className="card-image">
                        <GatsbyImage image={postImage} alt={post.title} />
                        <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="white"></path></svg>
                      </div>
                    </a>
                    <div className="card-body">
                      <p className="h4"><a href={post.uri}>{post.title}</a></p>
                      <p className="text-muted"><a href={post.uri}>{post.acfPostData.blogShortDescription}</a></p>
                      <hr />
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
          </Slider>
        </div>
      </div>

      <div className="popular-posts">

        <div className="container">
          <div className="full title-row">
            <span className="title-left">
              <h4>Popular Entries</h4>
              <p className="text-muted">Here’s what’s been big recently!</p>
            </span>
            <a href="/journal/all" className="button-light">View All</a>
          </div>
        </div>
        <div className="container">
          <div className="full">
            <hr />
          </div>
        </div>

        <div className="container related-posts-cards">
            {popularPosts.map((post, index) => {
              var postImage = getImage(post.acfPostData.blogMainImage.localFile);

              var size = "third"
              if (index < 2) {
                var size = "half"
              }

              return (
                <div className={size}>
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

        <div className="container">
          <div className="full text-center big-button">
            <a href="/journal/all" class="button-light">View All Posts</a>
          </div>
        </div>

      </div>

    </Layout>
  )
}


export const query = graphql`
  query {
    wpPage(slug: {eq: "journal"}) {
      id
      journalPage {
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
        popularPosts {
          ... on WpPost {
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
      }
    }
    propagationPosts: allWpPost(
      sort: { fields: [date], order: DESC }
      limit: 3
      filter: {categories: {nodes: {elemMatch: {slug: {eq: "propagation"}}}}}
    ) {
      nodes {
        id
        title
        uri
        date
        acfPostData {
          blogShortDescription
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
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: 4
    ) {
      nodes {
        id
        title
        uri
        date
        acfPostData {
          blogShortDescription
          blogMainImage {
            localFile {
              childImageSharp {
                gatsbyImageData (
                  width: 700
                  aspectRatio: 1.333
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                  quality: 70
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

export default JournalPage

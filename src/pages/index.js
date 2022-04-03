import * as React from "react"
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

import Layout from '../components/layout.js';
import Lines from '../components/lines.js';

import EmailImg from "../assets/images/email-sub.svg"

// markup
const IndexPage = ({ data }) => {

  const userCount = 500000;

  const headerImage = getImage(data.wpPage.homePage.homeTopImage.localFile)
  const featuredPlants = data.wpPage.homePage.featuredPlants
  const featuredPosts = data.wpPage.homePage.featuredPosts
  const popularPosts = data.wpPage.homePage.popularPosts


  return (
    <Layout>

      <Helmet>
        <title>Fiddle & Thorn | Helping You Care For Your Houseplants</title>
        <meta property="og:title" content={"Fiddle & Thorn | Helping You Care For Your Houseplants"} />
        <meta property="og:site_name" content="Fiddle & Thorn" />
        <meta property="og:url" content={"https://fiddleandthorn.com/"} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={data.wpPage.homePage.homeTopImage.sourceUrl} />
        <meta property="description" content={"At Fiddle & Thorn we're trying to help you care for your houseplants with easy to digest, straightforward information and guides."} />
        <meta property="og:description" content={"At Fiddle & Thorn we're trying to help you care for your houseplants with easy to digest, straightforward information and guides."} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="fiddleandthorn.com" />
        <meta property="twitter:url" content={"https://fiddleandthorn.com/"} />
        <meta name="twitter:title" content={"Fiddle & Thorn | Helping You Care For Your Houseplants"} />
        <meta name="twitter:description" content={"At Fiddle & Thorn we're trying to help you care for your houseplants with easy to digest, straightforward information and guides."} />
        <meta name="twitter:image" content={data.wpPage.homePage.homeTopImage.sourceUrl} />
      </Helmet>

      <Helmet>
        <script type="application/ld+json">
          {` {
              "@context" : "http://schema.org",
              "@type" : "Organization",
              "url" : "https://fiddleandthorn.com",
              "brand" : "Fiddle & Thorn",
              "name" : "Fiddle & Thorn",
              "alternateName" : "Fiddle & Thorn",
              "legalName" : "Fiddle & Thorn",
              "sameAs" : ["https://www.instagram.com/fiddleandthorn/", "https://www.facebook.com/fiddleandthorn", "https://twitter.com/fiddleandthorn", "https://www.pinterest.co.uk/fiddleandthorn/"]
            }`}
        </script>
      </Helmet>

      <div className="plant-header big-header">
        <GatsbyImage image={headerImage} alt="Plants Index" />
        <div className="container">
          <div className="full">
            <h1>{data.wpPage.homePage.homeTitle}</h1>
            <h3>{data.wpPage.homePage.homeSubtitle}</h3>
          </div>
        </div>
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="#FEFDFB"></path></svg>
      </div>

      <div className="intro-cards">
        <div className="container">
          <div className="third">
            <div className="card">
              <div className="card-body">
                <p className="h4">Plant Care</p>
                <p className="text-muted">Detailed care information to help keep your houseplants thriving.</p>
                <a className="arrow-link" href="/plants/">Find a Plant</a>
              </div>
            </div>
          </div>

          <div className="third">
            <div className="card">
              <div className="card-body">
                <p className="h4">Journal Entries</p>
                <p className="text-muted">Learn more about specific plant problems, propagation methods and useful top tips.</p>
                <a className="arrow-link" href="/journal/">Find out More</a>
              </div>
            </div>
          </div>

          <div className="third">
            <div className="card">
              <div className="card-body">
                <p className="h4">Ebooks</p>
                <p className="text-muted">In-depth guides on the most important aspects of houseplant care.</p>
                <a className="arrow-link" href="/store/">Shop Now</a>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="recent-posts featured-posts">

        <div className="container section-intro">
          <div className="half text-center">
            <h3>Featured Posts</h3>
            <p className="text-muted">We think you might like these!</p>
          </div>
        </div>

        <Lines />

        <div className="container related-posts-cards">
            {featuredPosts.map((post, index) => {
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

      <div className="shape-wrapper light">
        <svg class="shape" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="#2D361F"></path></svg>
      </div>

      <div className="related-plants featured-plants">
        <div className="container section-intro">

        <CountUp duration={4} end={userCount} separator=",">
            {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <div className="half text-center">
                    <p className="title">🌿 WE HAVE HELPED 🌿</p>
                    <h3><span className="text-yellow"><span ref={countUpRef} />+</span> Plant Parents</h3>
                    <p className="text-muted">Whether you're new to keeping houseplants or a seasoned professional, we're always here to help. Our collection of 100+ species specific guides tell you everything you need to know to keep your houseplants happy and healthy!</p>
                  </div>
                </VisibilitySensor>
            )}
        </CountUp>
        </div>
        <div className="container plant-cards">
            {featuredPlants.map((plant, index) => {
              var plantImage = getImage(plant.plantData.plantIconImage.localFile);
              var mask = getRandomInt(4) + 1
              var letter = plant.plantData.plantName.charAt(0)
              return (
                <div className="third" id={letter}>
                  <div className="card plant-card">
                    <a className="image" href={plant.uri}>
                      <GatsbyImage className={"clip_" + mask} image={plantImage} alt={plant.plantName} />
                    </a>
                    <div className="card-body">
                      <p className="h4"><a href={plant.uri}>{plant.plantData.plantName}</a></p>
                      <p className="text-muted"><a href={plant.uri}>{plant.plantData.plantLatinName}</a></p>
                    </div>
                  </div>
                </div>
              )
            })}
        </div>
        <div className="container">
          <div className="full big-button">
            <a href="/plants/" class="button-light">View Houseplant Guides</a>
          </div>
        </div>
        <div className="shape-wrapper">
          <svg class="shape" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
        </div>
      </div>

      <div className="email-subscribe" style={{ marginTop: "-4rem", marginBottom: "2rem" }}>
        <div className="container" style={{ backgroundImage: `url(${EmailImg})`, backgroundSize: "cover", backgroundPosition: "10% 55%" }}>
          <div className="half">
            <p className="h3">Get our journal delivered</p>
            <p>From us, direct to your inbox.</p>
          </div>
          <div className="half">
            <div id="mc_embed_signup">
              <form action="https://gmail.us17.list-manage.com/subscribe/post?u=075dae5ebd3f1e67e441d373a&amp;id=76b120be04" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="mc_embed_signup_scroll">
                  <input type="email" placeholder="Enter your email" autocomplete="off" value="" name="EMAIL" className="form-control" id="mce-EMAIL" />
                  <div id="mce-responses" class="clear">
                    <div class="response" id="mce-error-response" style={{"display":"none"}}></div>
                    <div class="response" id="mce-success-response" style={{"display":"none"}}></div>
                  </div>
                  <div style={{"position": "absolute", "left": "-5000px"}} aria-hidden="true">
                    <input type="text" name="b_075dae5ebd3f1e67e441d373a_76b120be04" tabindex="-1" value="" />
                  </div>
                  <div class="clear">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-posts popular-posts">
        <div className="container section-intro">
          <div className="half text-center">
            <h3>Popular Posts</h3>
            <p className="text-muted">Here’s what’s big recently!</p>
          </div>
        </div>
        <Lines />
        <div className="container related-posts-cards">
            {popularPosts.map((post, index) => {
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
        <div className="container">
          <div className="full big-button">
            <a href="/journal/all" class="button">View All Posts</a>
          </div>
        </div>
      </div>





    </Layout>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function count() {
  console.log("hello!")
}

export const query = graphql`
  query {
    wpPage(slug: {eq: "homepage"}) {
      id
      homePage {
        homeSubtitle
        homeTitle
        homeTopImage {
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
        featuredPosts {
          ... on WpPost {
            id
            title
            uri
            date
            categories {
              nodes {
                name
                uri
              }
            }
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
          }
        }
        popularPosts {
          ... on WpPost {
            id
            title
            uri
            date
            categories {
              nodes {
                name
                uri
              }
            }
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
          }
        }
        featuredPlants {
          ... on WpPlant {
            uri
            plantData {
              plantLatinName
              plantName
              plantIconImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData (
                      width: 600
                      aspectRatio: 1
                      placeholder: DOMINANT_COLOR
                      formats: [AUTO, WEBP, AVIF]
                      quality: 50
                    )
                  }
                }
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

export default IndexPage

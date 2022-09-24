import React from 'react';
import { graphql } from 'gatsby';
import Helmet from "react-helmet"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


import Layout from '../components/layout.js';

const WpUserTemplate = ({ data }) => {
    const user = data.wpUser
    var posts = data.allWpPost.nodes;

    return (
        <Layout>
            <Helmet>
                <title>{user.name} | Editor & Writer | Fiddle & Thorn</title>
                <meta property="og:title" content={user.name + " | Editor & Writer | Fiddle & Thorn"} />
                <meta property="og:site_name" content="Fiddle & Thorn" />
                <meta property="og:url" content={"https://fiddleandthorn.com/about-us/" + user.slug} />
                <meta property="og:type" content="website" />
                <meta property="description" content={"Our writers are the best!"} />
                <meta property="og:description" content={"Our writers are the best!"} />
                <meta name="twitter:card" content="summary" />
                <meta property="twitter:domain" content="fiddleandthorn.com" />
                <meta property="twitter:url" content={"https://fiddleandthorn.com/about-us/" + user.slug} />
                <meta name="twitter:title" content={user.name + " | Editor & Writer | Fiddle & Thorn"} />
                <meta name="twitter:description" content={"Our writers are the best!"} />
            </Helmet>

            <div className="blog-header">
                <div className="container">
                    <div className="blog-header-content">
                        <h1>{user.name}</h1>
                        <p className="blog-header-intro-text">Editor & Writer</p>
                    </div>
                </div>
                <div className="shape-bottom">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
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
        </Layout>
    );
};

export const query = graphql`
  query($id: String!) {
    wpUser(id: { eq: $id }) {
        name
    }
    allWpPost(filter: {author: {node: {id: {eq: $id}}}}, limit: 12) {
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
  }
`;
export default WpUserTemplate;

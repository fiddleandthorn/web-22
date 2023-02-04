import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import loadable from '@loadable/component'
import Helmet from "react-helmet"
import AdSense from 'react-adsense';

import "../assets/css/blog.css"

import Layout from '../components/layout.js';
import SubscribeModal from '../components/subscribe-modal.js';
import ShareLinks from '../components/shareLinks.js';

import BlogContent from '../components/blog/content.js';
import BlogAd from '../components/blog/ad.js';

const BlogList = loadable(() => import('../components/blog/list.js'));
const BlogImage = loadable(() => import('../components/blog/image.js'));
const BlogLocation = loadable(() => import('../components/blog/location.js'));
const BlogPlant = loadable(() => import('../components/blog/plant.js'));
const BlogAccordion = loadable(() => import('../components/blog/accordion.js'));
const BlogPrintToPage = loadable(() => import('../components/blog/printToPage.js'));
const EbookBanner = loadable(() => import('../components/blog/ebook-banner.js'));


const WpPostTemplate = ({ props, data }) => {

  const wpPost = data.wpPost
  const acfData = wpPost.acfPostData
  const adsDisabled = acfData.adsDisabled

  const featuredImage = getImage(acfData.blogMainImage.localFile)
  const flexibleContent = acfData.contentBuilder

  const publishDate = wpPost.date.split('T')[0];
  const updateDate = wpPost.modified.split('T')[0];

  var locationCounter = 0;
  var plantCounter = 0;
  var adCounter = 0;

  var formattedFAQs = []
  for (const block of flexibleContent) {
    if (block.fieldGroupName === "Post_Acfpostdata_ContentBuilder_Dropdowns") {
      for (const faq of block.dropdowns) {
        if (faq.faqCheck) {
          formattedFAQs.push({
            "@type": "Question",
            "name": faq.title,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.body.replace(/(<([^>]+)>)/gi, "")
            }
          })
        }
      }
    }
  }

  var relatedPosts = wpPost.acfPostData.relatedPosts;
  var generalPosts = data.allWpPost.nodes;
  if (relatedPosts) {
    relatedPosts = relatedPosts.concat(generalPosts)
  } else {
    relatedPosts = generalPosts
  }
  relatedPosts = Array.from(new Set(relatedPosts.map(a => a.id)))
   .map(id => {
     return relatedPosts.find(a => a.id === id)
  })

  return (
    <Layout>

      <Helmet>
        <title>{wpPost.title} | Fiddle & Thorn</title>
        <meta name="description" content={acfData.blogShortDescription} />
        <meta property="og:title" content={wpPost.title + " | Fiddle & Thorn"} />
        <meta property="og:site_name" content="Fiddle & Thorn" />
        <meta property="og:url" content={"https://fiddleandthorn.com" + wpPost.uri} />
        <meta property="og:description" content={acfData.blogShortDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={acfData.blogMainImage.sourceUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="fiddleandthorn.com" />
        <meta property="twitter:url" content={"https://fiddleandthorn.com" + wpPost.uri} />
        <meta name="twitter:title" content={wpPost.title + " | Fiddle & Thorn"} />
        <meta name="twitter:description" content={acfData.blogShortDescription} />
        <meta name="twitter:image" content={acfData.blogMainImage.sourceUrl} />
      </Helmet>

      <Helmet>
        <script type="application/ld+json">
          {`
            {
          "@context":"https://schema.org",
          "@graph":[
            {
              "@type":["Person","Organization"],
              "@id":"https://fiddleandthorn.com/#person",
              "name":"Fiddle & Thorn"
            }, {
              "@type":"WebSite",
              "@id":"https://fiddleandthorn.com/#website",
              "url":"https://fiddleandthorn.com",
              "name":"Fiddle & Thorn",
              "description": "We help you care for your houseplants.",
              "publisher":{
                 "@id":"https://fiddleandthorn.com/#person"
              },
              "inLanguage":"en-US"
              },{
                "@type":"ImageObject",
                "@id":"${acfData.blogMainImage.sourceUrl}",
                "url":"${acfData.blogMainImage.sourceUrl}",
                "width":"1280",
                "height":"1248",
                "inLanguage":"en-US"
              },{
                "@type":"Person",
                "@id":"https://fiddleandthorn.com/about-us/${wpPost.author.node.slug}/",
                "name":"${wpPost.author.node.name}",
                "url":"https://fiddleandthorn.com/about-us/${wpPost.author.node.slug}/",
                "image": {
                  "@type":"ImageObject",
                  "@id":"${wpPost.author.node.avatar.url}",
                  "url":"${wpPost.author.node.avatar.url}",
                  "caption":"${wpPost.author.node.name}",
                  "inLanguage":"en-US"
                }
              },{
                "@type":"WebPage",
                "@id":"https://fiddleandthorn.com${wpPost.uri}#webpage",
                "url":"https://fiddleandthorn.com${wpPost.uri}",
                "name":"${wpPost.title + " | Fiddle & Thorn"}",
                "datePublished":"${wpPost.date}",
                "dateModified":"${wpPost.modified}",
                "author":{
                  "@id":"https://fiddleandthorn.com/about-us/${wpPost.author.node.slug}/"
                },
                "isPartOf": { 
                  "@id":"https://fiddleandthorn.com/#website"},
                  "primaryImageOfPage": {
                    "@id":"${acfData.blogMainImage.sourceUrl}"
                  },
                  "inLanguage":"en-US"
                },{ 
                  "@type":"BlogPosting",
                  "headline":"${wpPost.title + " | Fiddle & Thorn"}",
                  "datePublished":"${wpPost.date}",
                  "dateModified":"${wpPost.modified}",
                  "author": { 
                    "@id":"https://fiddleandthorn.com/about-us/${wpPost.author.node.slug}/"
                  },
                  "publisher": {
                    "@id":"https://fiddleandthorn.com/#person"
                  },
                  "description":"${acfData.blogShortDescription}",
                  "name":"${wpPost.title + " | Fiddle & Thorn"}",
                  "@id":"https://fiddleandthorn.com${wpPost.uri}#richSnippet",
                  "isPartOf": {
                    "@id":"https://fiddleandthorn.com${wpPost.uri}#webpage"
                  },
                    "image":{
                    "@id":"${acfData.blogMainImage.sourceUrl}"
                    },
                    "inLanguage":"en-US",
                    "mainEntityOfPage": { 
                     "@id":"https://fiddleandthorn.com${wpPost.uri}#webpage"
                    }
                  }
                ]
              }
              `}
          </script>




        {formattedFAQs.length > 0 &&
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": ${JSON.stringify(formattedFAQs)}
              }
            `}
          </script>
        }
      </Helmet>

      <SubscribeModal />

      <div className="blog-header">
        <div className="container">
          <div className="blog-header-content">
            <div className="blog-categories">
              {wpPost.categories.nodes.map(category => {
                if (category.name !== "All") {
                  return (
                    <a href={category.uri} className="badge">{category.name}</a>
                  )
                } else {
                  return (
                    <></>
                  )
                }
              })}
            </div>
            <h1>{wpPost.title}</h1>
            <p className="blog-header-intro-text">{acfData.blogShortDescription}</p>
            <p className="date-published hidden">{publishDate}</p>
            <p className="date-updated hidden">{updateDate}</p>
          </div>
        </div>
        <div className="shape-bottom">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
        </div>
      </div>

      <div className="blog-body">
        <div className="container">
          <div className="blog-content">
            <GatsbyImage className="blog-featured-image" image={featuredImage} alt={wpPost.title} />
            <PostFlexibleContent content={flexibleContent} locationCounter={locationCounter} plantCounter={plantCounter} adCounter={adCounter} adsDisabled={adsDisabled} />

            <div className="blog-sidebar-block-wrapper">
              <div className="blog-sidebar-block">
                <p className="h4">We think you'll like these!</p>
                <ul className="blog-list-block">
                  {relatedPosts.slice(0, 5).map((post, index) => {
                    return (
                      <li>
                        <span className="list-item">
                          <a href={post.uri}>{post.title}</a>
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <hr />
            <p>Written by <a href={"/about-us/" + wpPost.author.node.slug}>{wpPost.author.node.name}</a></p>
            <hr />
            <div className="blog-categories blog-sharing">
              {wpPost.categories.nodes.map(category => {
                if (category.name !== "All") {
                  return (
                    <a href={category.uri} className="badge">{category.name}</a>
                  )
                } else {
                  return (
                    <></>
                  )
                }
              })}
              <ShareLinks path={wpPost.uri} image={wpPost.acfPostData.blogMainImage.sourceUrl} />
            </div>
            <hr />
          </div>
          <div className="blog-sidebar">
            <div className="blog-sidebar-block-wrapper">
              <div className="blog-sidebar-block">
                <p className="h4">We think you'll like these!</p>
                <ul className="blog-list-block">
                  {relatedPosts.slice(0, 5).map((post, index) => {
                    return (
                      <li>
                        <span className="list-item">
                          <a href={post.uri}>{post.title}</a>
                        </span>
                      </li>
                    )
                  })}
                </ul>
                {!adsDisabled &&
                  <AdSense.Google
                    client='ca-pub-7292810486004926'
                    slot='3678711086'
                    style={{ width: 300, height: 250, float: 'left' }}
                    format=''
                  />
                }
              </div>
            </div>
            <div className="blog-sidebar-block-wrapper">
              <div className="blog-sidebar-block rust">
                <p className="h4">Others are reading...</p>
                <ul className="blog-list-block">
                  {relatedPosts.slice(5, 10).map((post, index) => {
                    return (
                      <li>
                        <span className="list-item">
                          <a href={post.uri}>{post.title}</a>
                        </span>
                      </li>
                    )
                  })}
                </ul>
                {!adsDisabled &&
                  <AdSense.Google
                    client='ca-pub-7292810486004926'
                    slot='3678711086'
                    style={{ width: 300, height: 250, float: 'left' }}
                    format=''
                  />
                }
              </div>
            </div>
          </div>
        </div>
        <div className="container related-posts-cards">
            {relatedPosts.slice(10, 19).map((post, index) => {
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
                          } else {
                            return (
                              <></>
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

      <div className="affiliate-message">
        <div className="container">
          <div className="full">
            <div className="message">
              <p>Fiddle and Thorn is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com</p>
            </div>
          </div>
        </div>
      </div>


      {!adsDisabled &&
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      }


    </Layout>
  );
};


const PostFlexibleContent = ({ content, locationCounter, plantCounter, adCounter, adsDisabled }) => {
  return (
    <>
      {content.map(block => {

        if (block.fieldGroupName === "Post_Acfpostdata_ContentBuilder_Content") {

          let formattedContent = ""
          if (block.content.split('<h2>').length > 1) {
            let splitContent = block.content.split('<h2>')
            for (let i=0; i < splitContent.length; i++) {
              if (splitContent[i] == "") {
                let headingId = splitContent[i + 1].split('</h2>')[0].replace(/<\/?[^>]+(>|$)/g, "").replaceAll(' ', '-').toLowerCase().trim()
                formattedContent = formattedContent.concat('<h2 id="' + headingId + '">', splitContent[i + 1])
              }
            }
          } else {
            formattedContent = formattedContent.concat(block.content)
          }

          let formattedContentH3 = ''
          if (formattedContent.split('<h3>').length > 1) {
            let splitContent = formattedContent.split('<h3>')
            for (let i = 0; i < splitContent.length; i++) {
              if (splitContent[i].split('</h3>').length > 1) {
                let headingId = splitContent[i].split('</h3>')[0].replace(/<\/?[^>]+(>|$)/g, "").replaceAll(' ', '-').toLowerCase().trim()
                formattedContentH3 = formattedContentH3.concat('<h3 id="' + headingId + '">', splitContent[i].split('</h3>')[0], '</h3>', splitContent[i].split('</h3>')[1])
              } else {
                formattedContentH3 = formattedContentH3.concat(splitContent[i])
              }
            }
          } else {
            formattedContentH3 = formattedContentH3.concat(formattedContent)
          }

          return (
            <BlogContent content={formattedContentH3} />
          )
        }

        if (block.fieldGroupName === "Post_Acfpostdata_ContentBuilder_List") {
          return (
            <BlogList items={block.listItems} check={block.type} />
          )
        }

        if (block.fieldGroupName === "Post_Acfpostdata_ContentBuilder_Image") {
          return (
            <BlogImage data={block.image} />
          )
        }

        if (block.fieldGroupName === "Post_Acfpostdata_ContentBuilder_Location") {
          locationCounter += 1
          return (
            <BlogLocation data={block} counter={locationCounter} />
          )
        }

        if (block.fieldGroupName === "Post_Acfpostdata_ContentBuilder_PlantNugget") {
          plantCounter += 1
          return (
            <BlogPlant data={block} counter={plantCounter} />
          )
        }

        if (block.fieldGroupName === "Post_Acfpostdata_ContentBuilder_Ad" && !adsDisabled) {
          adCounter += 1
          return (
            <BlogAd />
          )
        }

        if (block.fieldGroupName === "Post_Acfpostdata_ContentBuilder_Dropdowns") {
          if (block.printToPage === true) {
            return (
              <BlogPrintToPage data={block.dropdowns} />
            )
          } else {
            return (
              <BlogAccordion data={block.dropdowns} />
            )
          }
        }

        if (block.fieldGroupName === "Post_Acfpostdata_ContentBuilder_Ebook") {
          return (
            <EbookBanner />
          )
        }


        return (
          <></>
        )

      })}


    </>
  )
}


export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      uri
      slug
      date
      modified
      author {
        node {
          name
          slug
          avatar {
            url
          }
        }
      }
      acfPostData {
        adsDisabled
        blogShortDescription
        blogMainImage {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData (
                width: 700
                placeholder: DOMINANT_COLOR
                formats: [AUTO, AVIF]
                quality: 50
              )
            }
          }
        }
        contentBuilder {
          ... on WpPost_Acfpostdata_ContentBuilder_Content {
            content
            fieldGroupName
          }
          ... on WpPost_Acfpostdata_ContentBuilder_Image {
            fieldGroupName
            image {
              caption
              localFile {
                childImageSharp {
                  gatsbyImageData (
                    width: 700
                    aspectRatio: 1.333
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, AVIF]
                    quality: 50
                  )
                }
              }
            }
          }
          ... on WpPost_Acfpostdata_ContentBuilder_PlantNugget {
            fieldGroupName
            title
            content
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData (
                    width: 700
                    aspectRatio: 1.333
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, AVIF]
                    quality: 50
                  )
                }
              }
            }
            selectedPlant {
              ... on WpPlant {
                id
                uri
                plantData {
                  plantName
                  plantLatinName
                  plantNuggetContent
                  plantNuggetImage {
                    localFile {
                      childImageSharp {
                        gatsbyImageData (
                          width: 700
                          aspectRatio: 1.333
                          placeholder: DOMINANT_COLOR
                          formats: [AUTO, AVIF]
                          quality: 50
                        )
                      }
                    }
                  }
                }
              }
            }
          }
          ... on WpPost_Acfpostdata_ContentBuilder_Location {
            content
            fieldGroupName
            imageCredit
            mapsLocation
            shortAddress
            title
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData (
                    width: 700
                    aspectRatio: 1.333
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, AVIF]
                    quality: 50
                  )
                }
              }
              altText
            }
          }
          ... on WpPost_Acfpostdata_ContentBuilder_List {
            fieldGroupName
            type
            listItems {
              listItem
            }
          }
          ... on WpPost_Acfpostdata_ContentBuilder_Dropdowns {
            fieldGroupName
            printToPage
            dropdowns {
              body
              faqCheck
              title
            }
          }
          ... on WpPost_Acfpostdata_ContentBuilder_Ad {
            fieldGroupName
          }
          ... on WpPost_Acfpostdata_ContentBuilder_Ebook {
            fieldGroupName
          }
        }
        relatedPosts {
          ... on WpPost {
            id
            title
            uri
            acfPostData {
              blogMainImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData (
                      width: 700
                      aspectRatio: 1.333
                      placeholder: DOMINANT_COLOR
                      formats: [AUTO, AVIF]
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
      categories {
        nodes {
          name
          uri
        }
      }
    }
    allWpPost(limit: 19, filter: {id: {nin: [$id]}, tags: {nodes: {elemMatch: {name: {eq: "General"}}}}}) {
      nodes {
        id
        title
        uri
        acfPostData {
          blogMainImage {
            localFile {
              childImageSharp {
                gatsbyImageData (
                  width: 700
                  aspectRatio: 1.333
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, AVIF]
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
export default WpPostTemplate;

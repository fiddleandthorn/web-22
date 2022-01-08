import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Helmet from "react-helmet";
import AdSense from 'react-adsense';

import "../assets/css/plant.css"

import Layout from '../components/layout.js';
import PlantHeader from '../components/plant/header.js';
import Lines from '../components/lines.js';
import PlantAccordion from '../components/plant/accordion.js';
import SubscribeModal from '../components/subscribe-modal.js';

const WpPlantTemplate = ({ data }) => {

  const plant = data.wpPlant.plantData
  const headerImage = getImage(plant.plantMainImage.localFile)

  const iconImage = getImage(plant.plantIconImage.localFile)

  if (plant.plantSecondImage) {
    var secondImage = getImage(plant.plantSecondImage.localFile)
  } else {
    var secondImage = iconImage;
  }

  const clipOne = getRandomInt(4) + 1
  var clipTwo = getRandomInt(4) + 1

  while (clipOne === clipTwo) {
    clipTwo = getRandomInt(4) + 1
  }

  const plantBasics = [
    {
      "name"    : "Light",
      "options" : [
        {
          "title" : "Low Light",
          "copy": "I prefer a shady spot as too much sunlight will damage my leaves."
        },
        {
          "title" : "Medium Light",
          "copy": "I prefer areas that aren't too bright or shady. Finding a balance is important."
        },
        {
          "title" : "Bright Indirect Light",
          "copy": "I love the sunshine but too much direct light will damage my leaves."
        },
        {
          "title" : "Bright Direct Light",
          "copy": "I thrive in bright areas of your home so am best placed near a window."
        }
      ]
    },
    {
      "name"    : "Water",
      "options" : [
        {
          "title" : "Water Infrequently",
          "copy": "I can be quite sensitive to root rot so be careful not to overwater me."
        },
        {
          "title" : "Water Moderately",
          "copy": "I don't like my soil to be too dry or too soggy. Little and often is what I'm after."
        },
        {
          "title" : "Water Frequently",
          "copy": "I like my soil to be moist so make sure to water me often."
        }
      ]
    },
    {
      "name"    : "Humidity",
      "options" : [
        {
          "title" : "Low Humidity",
          "copy": "I grow best in pretty dry environments so don't try and increase the humidity."
        },
        {
          "title" : "Medium Humidity",
          "copy": "Please make sure the air isn't too dry, otherwise I won't be a happy plant."
        },
        {
          "title" : "High Humidity",
          "copy": "I thrive in humid environments so please mist my leaves every so often."
        }
      ]
    },
    {
      "name"    : "Soil",
      "options" : [
        {
          "title" : "Potting Soil",
          "copy": "I need soil specifically for indoor plants as it retains the right amount of water."
        },
        {
          "title" : "Draining Soil",
          "copy": "I like a mix that includes peat moss and perlite as these prevent my roots from becoming water-logged."
        },
        {
          "title" : "No Soil Required",
          "copy": "I don't actually need any soil or even a pot to grow in."
        }
      ]
    }
  ]

  return (
    <Layout>

      <Helmet>
        <title>{plant.plantName} Care Guide | Fiddle & Thorn</title>
        <meta property="og:title" content={plant.plantName + " Care Guide | Fiddle & Thorn"} />
        <meta property="og:site_name" content="Fiddle & Thorn" />
        <meta property="og:url" content={"https://fiddleandthorn.com" + data.wpPlant.uri} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={plant.plantIconImage.sourceUrl} />
        <meta name="description" content={"How to best care for your " + plant.plantName + ". Learn all about " + plant.plantName + " basic care, propagation, repotting, and any common issues you might run into."} />
        <meta property="og:description" content={"How to best care for your " + plant.plantName + ". Learn all about " + plant.plantName + " basic care, propagation, repotting, and any common issues you might run into."} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="fiddleandthorn.com" />
        <meta property="twitter:url" content={"https://fiddleandthorn.com" + data.wpPlant.uri} />
        <meta name="twitter:title" content={data.wpPlant.title + " | Fiddle & Thorn"} />
        <meta name="twitter:description" content={"How to best care for your " + plant.plantName + ". Learn all about " + plant.plantName + " basic care, propagation, repotting, and any common issues you might run into."} />
        <meta name="twitter:image" content={plant.plantIconImage.sourceUrl} />
      </Helmet>

      <SubscribeModal />

      <PlantHeader name={plant.plantName} latinName={plant.plantLatinName} image={headerImage} />

      <div className="plant-basic-care">

        <div className="container">
          <div className="full intro-copy" dangerouslySetInnerHTML={{__html: plant.plantIntroCopy}} />
        </div>

        <div className="container basics">
          <div className="quarter">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M8 16a4 4 0 118 0H8zm-4 2h16a1 1 0 010 2H4a1 1 0 010-2z" fill="#f1b725"></path><path d="M19.5 13H21a1.5 1.5 0 010 3h-1.5a1.5 1.5 0 010-3zm-3.44-4.129l1.061-1.06a1.5 1.5 0 012.122 2.121l-1.061 1.06a1.5 1.5 0 01-2.121-2.12zM3 13h1.5a1.5 1.5 0 010 3H3a1.5 1.5 0 010-3zm9-8.5A1.5 1.5 0 0113.5 6v1.5a1.5 1.5 0 01-3 0V6A1.5 1.5 0 0112 4.5zM4.81 7.81a1.5 1.5 0 012.122 0l1.06 1.061a1.5 1.5 0 01-2.12 2.122L4.81 9.932a1.5 1.5 0 010-2.121z" fill="#f1b725" opacity=".3"></path></g></svg>
            <h4>{plantBasics[0]['options'][plant.plantLightRating - 1]['title']}</h4>
            <p>{plantBasics[0]['options'][plant.plantLightRating - 1]['copy']}</p>
          </div>
          <div className="quarter">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M4.308 13C3.033 13 2 11.993 2 10.75c0-.828.77-2.078 2.308-3.75 1.538 1.672 2.307 2.922 2.307 3.75 0 1.243-1.033 2.25-2.307 2.25zm15.384 0c-1.274 0-2.307-1.007-2.307-2.25 0-.828.769-2.078 2.307-3.75C21.231 8.672 22 9.922 22 10.75c0 1.243-1.033 2.25-2.308 2.25zM8.308 20C7.033 20 6 18.993 6 17.75c0-.828.77-2.078 2.308-3.75 1.538 1.672 2.307 2.922 2.307 3.75 0 1.243-1.033 2.25-2.307 2.25zM16 20c-1.275 0-2.308-1.007-2.308-2.25 0-.828.77-2.078 2.308-3.75 1.538 1.672 2.308 2.922 2.308 3.75 0 1.243-1.033 2.25-2.308 2.25z" fill="#f1b725" opacity=".3"></path><path d="M12 13c1.275 0 2.308-1.007 2.308-2.25 0-.828-.77-2.078-2.308-3.75-1.538 1.672-2.308 2.922-2.308 3.75C9.692 11.993 10.725 13 12 13z" fill="#f1b725"></path></g></svg>
            <h4>{plantBasics[1]['options'][plant.plantWaterRating - 1]['title']}</h4>
            <p>{plantBasics[1]['options'][plant.plantWaterRating - 1]['copy']}</p>
          </div>
          <div className="quarter">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M19.5 10.5H21a1.5 1.5 0 010 3h-1.5a1.5 1.5 0 010-3zm-3.44-4.629l1.061-1.06a1.5 1.5 0 012.122 2.121l-1.061 1.06a1.5 1.5 0 11-2.121-2.12zm0 12.311a1.5 1.5 0 112.122-2.121l1.06 1.06a1.5 1.5 0 01-2.12 2.122l-1.061-1.061zM3 10.5h1.5a1.5 1.5 0 010 3H3a1.5 1.5 0 010-3zm9-9A1.5 1.5 0 0113.5 3v1.5a1.5 1.5 0 01-3 0V3A1.5 1.5 0 0112 1.5zM12 18a1.5 1.5 0 011.5 1.5V21a1.5 1.5 0 01-3 0v-1.5A1.5 1.5 0 0112 18zM4.81 4.81a1.5 1.5 0 012.122 0l1.06 1.061a1.5 1.5 0 01-2.12 2.122L4.81 6.932a1.5 1.5 0 010-2.121zm0 14.433a1.5 1.5 0 010-2.122l1.061-1.06a1.5 1.5 0 112.122 2.121l-1.061 1.06a1.5 1.5 0 01-2.121 0z" fill="#f1b725" opacity=".3"></path></g></svg>
            <h4>{plantBasics[2]['options'][plant.plantHumidityRating - 1]['title']}</h4>
            <p>{plantBasics[2]['options'][plant.plantHumidityRating - 1]['copy']}</p>
          </div>
          <div className="quarter">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M5.133 2.036c6.945 3.876 9.445 8.206 7.5 12.99-4.97-.79-7.47-5.12-7.5-12.99z" fill="#f1b725" opacity=".3"></path><path d="M18.742 2.036c-6.945 3.876-9.445 8.206-7.5 12.99 4.97-.79 7.47-5.12 7.5-12.99z" fill="#f1b725" opacity=".3"></path><path d="M12 1c-4.076 6.83-4.076 11.83 0 15 3.91-3.17 3.91-8.17 0-15z" fill="#f1b725" opacity=".3"></path><path d="M6.344 13h11.312a1 1 0 01.958 1.287l-2.186 7.288A2 2 0 0114.512 23H9.488a2 2 0 01-1.916-1.425l-2.186-7.288A1 1 0 016.344 13z" fill="#f1b725"></path></g></svg>
            <h4>{plantBasics[3]['options'][plant.plantSoilRating - 1]['title']}</h4>
            <p>{plantBasics[3]['options'][plant.plantSoilRating - 1]['copy']}</p>
          </div>
        </div>

      </div>
      <Lines flipped={true} />

      <div className="plant-detailed-care">
        <div className="container intro">
          <div className="half">
            <h2>Detailed <span className="text-yellow">{plant.plantName}</span> Care Information</h2>
            <p className="text-muted">Whether you're looking to make sure your {plant.plantName} is in it's perfect conditions, or looking to see if one could work for your space. We've got you covered.</p>
          </div>
          <div className="third">
            <GatsbyImage className={"clip_" + clipOne} image={iconImage} alt={plant.plantName} />
          </div>
        </div>
        <div className="container plant-detail-blocks">
          <div className="full">

            {plant.plantDetailContent.map((block, index) => {

              if ((index + 1) % 3 === 0  ) {
                return (
                  <>
                    <hr />
                    <div className="plant-detail-block">
                      <h4>{block.plantDetailContentTitle}</h4>
                      <div dangerouslySetInnerHTML={{__html: block.plantDetailContentCopy}}/>
                    </div>
                    <hr />
                    <AdSense.Google
                      client='ca-pub-3791928853233682'
                      slot='6642185036'
                      style={{ display: 'block' }}
                      format='auto'
                      responsive='true'
                      layoutKey='-gw-1+2a-9x+5c'
                      data-adtest="on"
                    />
                  </>
                )
              } else {
                return (
                  <>
                    <hr />
                    <div className="plant-detail-block">
                      <h4>{block.plantDetailContentTitle}</h4>
                      <div dangerouslySetInnerHTML={{__html: block.plantDetailContentCopy}}/>
                    </div>
                  </>
                )
              }
            })}
          </div>
        </div>
      </div>
      <Lines flipped={true} />

      <div className="plant-common-problems">
        <div className="container intro">
          <div className="third">
            <GatsbyImage className={"clip_" + clipTwo} image={secondImage} alt={plant.plantName} />
          </div>
          <div className="half">
            <h2>Common Problems with your <span className="text-yellow">{plant.plantName}</span></h2>
            <p className="text-muted">Here are some common issues that you might run into. It's important to diagnose any issues early to give your plant the best chance of bouncing back.</p>
          </div>
        </div>
        <div className="container plant-dropdowns">
          <div className="full">

            <PlantAccordion data={plant.plantCommonIssues} />

          </div>
        </div>
      </div>
      <Lines flipped={true} />

      {plant.plantRelatedPosts !== null &&
        <>
          <div className="related-posts">
            <div className="container">
              <div className="half">
                <h2>Recent journal entries</h2>
                <p className="text-muted">Here are some of our recent journal entries that we think you might like.</p>
              </div>
              <div className="half">

              </div>
            </div>
            <div className="container related-posts-cards">
                {plant.plantRelatedPosts.map((post, index) => {
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
                          <p className="text-muted">{ truncate(post.acfPostData.blogShortDescription, 75, true) }</p>
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
          <Lines flipped={true} />
        </>
      }

      {plant.plantRelatedPlants !== null &&
          <div className="related-plants">
            <div className="container">
              <div className="half">
                <h2>Related Plants</h2>
                <p className="text-muted">Here are some other plants that will work in similar conditions, or have some matching qualities.</p>
              </div>
              <div className="half">
              </div>
            </div>
            <div className="container plant-cards">
                {plant.plantRelatedPlants.map((plant, index) => {
                  var plantImage = getImage(plant.plantData.plantIconImage.localFile);
                  var mask = getRandomInt(4) + 1
                  return (
                    <div className="third">
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
          </div>
      }

      <div className="ad">
        <div className="container">
          <div className="full">
            <AdSense.Google
              client='ca-pub-3791928853233682'
              slot='6642185036'
              style={{ display: 'block' }}
              format='auto'
              responsive='true'
              layoutKey='-gw-1+2a-9x+5c'
              data-adtest="on"
            />
          </div>
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

    </Layout>
  );
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function truncate( str, n, useWordBoundary ){
  if (str.length <= n) { return str; }
  const subString = str.substr(0, n-1); // the original check
  return (useWordBoundary
    ? subString.substr(0, subString.lastIndexOf(" "))
    : subString) + "...";
};

export const query = graphql`
  query($id: String!) {
    wpPlant(id: { eq: $id }) {
      title
      uri
      plantData {
        plantName
        plantLatinName
        plantIntroCopy
        plantLightRating
        plantHumidityRating
        plantWaterRating
        plantSoilRating
        plantDetailContent {
          plantDetailContentCopy
          plantDetailContentTitle
        }
        plantCommonIssues {
          plantCommonIssuesSingleCopy
          plantCommonIssuesSingleFaq
          plantCommonIssuesSingleTitle
        }
        plantMainImage {
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
        plantIconImage {
          sourceUrl
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
        plantSecondImage {
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
        plantRelatedPlants {
            ... on WpPlant {
              id
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

        plantRelatedPosts {
            ... on WpPost {
              id
              uri
              title
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
      }
    }
  }
`;




export default WpPlantTemplate;

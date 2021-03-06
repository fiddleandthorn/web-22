import * as React from "react"
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"

import "../assets/css/blog.css"

import Layout from '../components/layout.js';


// markup
const PlantsPage = ({ data }) => {

  const alphabet = [
    ["A", false],
    ["B", false],
    ["C", false],
    ["D", false],
    ["E", false],
    ["F", false],
    ["G", false],
    ["H", false],
    ["I", false],
    ["J", false],
    ["K", false],
    ["L", false],
    ["M", false],
    ["N", false],
    ["O", false],
    ["P", false],
    ["Q", false],
    ["R", false],
    ["S", false],
    ["T", false],
    ["U", false],
    ["V", false],
    ["W", false],
    ["X", false],
    ["Y", false],
    ["Z", false],
  ]

  const plants = data.allWpPlant.nodes
  const headerImage = getImage(data.wpPage.plantsIndex.plantsTopImage.localFile)
  const plantCategories = data.allWpPlantCategory.nodes

  for (var i = 0; i < plants.length; i++) {
    var letter = plants[i].plantData.plantName.charAt(0);
    for (var x = 0; x < alphabet.length; x++) {
      if (alphabet[x][0] === letter) {
        alphabet[x][1] = true;
      }
    }
  }

  return (
    <Layout>

      <Helmet>
        <title>All Plants | Plants Index | Fiddle & Thorn</title>
        <meta property="og:title" content={"All Plants | Plants Index | Fiddle & Thorn"} />
        <meta property="og:site_name" content="Fiddle & Thorn" />
        <meta property="og:url" content={"https://fiddleandthorn.com/plants/"} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={data.wpPage.plantsIndex.plantsTopImage.sourceUrl} />
        <meta property="description" content={"desc"} />
        <meta property="og:description" content={"desc"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="fiddleandthorn.com" />
        <meta property="twitter:url" content={"https://fiddleandthorn.com/plants/"} />
        <meta name="twitter:title" content={"All Plants | Plants Index | Fiddle & Thorn"} />
        <meta name="twitter:description" content={"desc"} />
        <meta name="twitter:image" content={data.wpPage.plantsIndex.plantsTopImage.sourceUrl} />
      </Helmet>

      <div className="plant-header big-header">
        <GatsbyImage image={headerImage} alt="Plants Index" />
        <div className="container">
          <div className="full">
            <h1>{data.wpPage.plantsIndex.plantsTitle}</h1>
            <h3>{data.wpPage.plantsIndex.plantsSubtitle}</h3>
          </div>
        </div>
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="#FEFDFB"></path></svg>
      </div>

      <div className="plant-navigation">
        <div className="container">
          <div className="full">
            <div className="plant-navbar">
              {alphabet.map((letter, index) => {
                if (letter[1]) {
                  return (
                    <a href={'#' + letter[0]}>{letter[0]}</a>
                  )
                } else {
                  return (
                    <a className="text-muted">{letter[0]}</a>
                  )
                }
              })}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="full">
            <div className="category-navigation">
              <a className="badge" href="/plants/">All</a>
              {plantCategories.map((category) => {
                return (
                  <a className="badge-light" href={"/plants/categories/" + category.slug}>{category.name}</a>
                )
              })}
            </div>
          </div>
        </div>
      </div>


      <div className="related-plants">
        <div className="container plant-cards">
            {plants.map((plant, index) => {
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
      </div>




    </Layout>
  )
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


export const query = graphql`
  query {
    wpPage(id: {eq: "cG9zdDoyNTM="}) {
      id
      plantsIndex {
        plantsSubtitle
        plantsTitle
        plantsTopImage {
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
    allWpPlant(sort: {fields: plantData___plantName, order: ASC}) {
      nodes {
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
    allWpPlantCategory {
        nodes {
        name
        slug
      }
    }
  }
`;

export default PlantsPage

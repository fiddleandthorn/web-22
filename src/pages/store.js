import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import loadable from '@loadable/component'
import Helmet from "react-helmet"
import AdSense from 'react-adsense';

import "../assets/css/blog.css"

import Layout from '../components/layout.js';


const ErrorTemplate = ({ data }) => {

  const headerImage = getImage(data.wpPage.journalPage.journalTopImage.localFile)

  return (
    <Layout>
      <Helmet>
        <title>Store | Fiddle & Thorn</title>
      </Helmet>
      <div className="plant-header">
        <GatsbyImage image={headerImage} alt="Our Store" />
        <div className="container">
          <div className="full">
            <h1>Our Store</h1>
            <h3>Check out our latest products.</h3>
          </div>
        </div>
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="#FEFDFB"></path></svg>
      </div>
      <div className="product-grid">
        <div className="container">
          <div className="full">

          <div className="card wide-card">
            <a href="https://fiddleandthorn.gumroad.com/l/houseplant-care-ebook" className="image-wrapper">
              <div className="card-image">
                <StaticImage src="../images/ebook-image.png" alt="eBook Image" width={700} aspectRatio={1.3333} quality={100} />
              </div>
            </a>
            <div className="card-body">
              <p className="h4"><a href="https://fiddleandthorn.gumroad.com/l/houseplant-care-ebook">Complete Houseplant Care eBook</a></p>
              <p className="description">Our comprehensive (and rather good looking) eBook that will teach you everything you need to know to successfully care for, and maintain your houseplants!</p>
              <a style="width:fit-content" href="https://fiddleandthorn.gumroad.com/l/houseplant-care-ebook?_gl=1*nptbzz*_ga*ODQxOTA1NjQzLjE2NDg0ODYzNjQ.*_ga_6LJN6D94N6*MTY0ODQ4NjM2Ni4xLjEuMTY0ODQ4OTQ4My4w" class="gumroad-button">Buy on<span class="gumroad-button-logo"></span></a>
            </div>
          </div>

          </div>
        </div>
      </div>

    </Layout>
  );
};

export const query = graphql`
  query {
    wpPage(slug: {eq: "journal"}) {
      id
      journalPage {
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
  }
`;


export default ErrorTemplate;

import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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
            <div className="gumroad-product-embed">
              <a href="https://fiddleandthorn.gumroad.com/l/houseplant-care-ebook">Loading...</a>
            </div>
          </div>
        </div>
      </div>
      <script src="https://gumroad.com/js/gumroad-embed.js"></script>

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

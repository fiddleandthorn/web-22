import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import loadable from '@loadable/component'
import Helmet from "react-helmet"
import AdSense from 'react-adsense';

import "../assets/css/blog.css"

import Layout from '../components/layout.js';


const ErrorTemplate = ({ props }) => {
  return (
    <Layout>
      <Helmet>
        <title>Store | Coming Soon | Fiddle & Thorn</title>
      </Helmet>
      <div className="plant-header big-header error">
        <div className="container">
          <div className="full">
            <h1>Store Coming Soon!</h1>
            <h3>We're still working on getting our store ready and online! It'll be back soon!</h3>
            <a href="/" className="button">Go Home</a>
          </div>
        </div>
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="#FEFDFB"></path></svg>
      </div>
    </Layout>
  );
};



export default ErrorTemplate;

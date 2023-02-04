import React from 'react';
import Helmet from "react-helmet"

import "../assets/css/blog.css"

import Layout from '../components/layout.js';

const ErrorTemplate = ({ props }) => {
  return (
    <Layout>
      <Helmet>
        <title>404 | Fiddle & Thorn</title>
      </Helmet>
      <div className="plant-header big-header error">
        <div className="container">
          <div className="full">
            <h1>404</h1>
            <h3>Oops, looks like we've messed something up here!</h3>
            <a href="/" className="button">Go Home</a>
          </div>
        </div>
        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="#FEFDFB"></path></svg>
      </div>
    </Layout>
  );
};



export default ErrorTemplate;

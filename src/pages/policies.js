import * as React from "react"
import Helmet from "react-helmet"

import "../assets/css/blog.css"

import Layout from '../components/layout.js';


// markup
const PoliciesPage = () => {
  return (
    <Layout>

      <Helmet>
        <title>Our Policies | Fiddle & Thorn</title>
        <meta property="og:title" content={"Our Policies | Fiddle & Thorn"} />
        <meta property="og:site_name" content="Fiddle & Thorn" />
        <meta property="og:url" content={"https://fiddleandthorn.com/policies/"} />
        <meta property="og:type" content="website" />
        <meta property="description" content={"Take a peek at our policies, pretty boring stuff..."} />
        <meta property="og:description" content={"Take a peek at our policies, pretty boring stuff..."} />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:domain" content="fiddleandthorn.com" />
        <meta property="twitter:url" content={"https://fiddleandthorn.com/policies/"} />
        <meta name="twitter:title" content={"Our Policies | Fiddle & Thorn"} />
        <meta name="twitter:description" content={"Take a peek at our policies, pretty boring stuff..."} />
      </Helmet>

      <div className="blog-header">
        <div className="container">
          <div className="blog-header-content">
            <h1>Policies</h1>
            <p className="blog-header-intro-text">Updated 05/12/2020</p>
          </div>
        </div>
        <div className="shape-bottom">
          <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
        </div>
      </div>

      <div className="blog-body">
        <div className="container">
          <div className="blog-content">
            <div className="blog-content-block" style={{"margin-top": "5rem"}}>
              <h2>Privacy Policy</h2>
              <p>Your privacy is important to us. It is Fiddle and Thorn’s policy to respect your privacy regarding any information we may collect from you across our website, <a href="https://fiddleandthorn.com">https://fiddleandthorn.com</a>, and other sites we own and operate.</p>
              <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
              <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
              <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
              <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
              <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
              <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
              <p>This policy is effective as of 5 December 2020.</p>
            </div>
          </div>
          <div className="blog-sidebar">

            <div className="blog-sidebar-block-wrapper">
              <div className="blog-sidebar-block">
                <div className="card sidebar-card">
                  <div className="card-body">
                    <p className="h5">Have a question?</p>
                    <p className="text-muted">Not quite sure what you're looking at, or just have a quick question? We’d be happy to chat with you and clear things up for you. Anytime!</p>
                    <p className="title">Email Us</p>
                    <a href="mailto:hey@fiddleandthorn.com">hey@fiddleandthorn.com</a>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>



    </Layout>
  )
}

export default PoliciesPage

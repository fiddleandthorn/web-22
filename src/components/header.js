import React, { useState, useRef, useEffect } from "react";
import Helmet from "react-helmet"
import CookieConsent from "react-cookie-consent";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"


import { withPrefix, useStaticQuery, graphql } from "gatsby"

import Seo from '../components/seo.js';
import Search from "../components/search.js"

import logo from "../images/logo.svg"
import search from "../images/search.svg"
import menu from "../images/menu.svg"


const Header = () => {

  const [setActive, setActiveState] = useState("");

  const [setMenu, setMenuState] = useState("");

  const content = useRef(null);

  function toggleSearch() {
    setActiveState(setActive === "" ? "open" : "");
  }

  function toggleMenu() {
    setMenuState(setMenu === "" ? "open" : "");
  }

  return (
    <>
      <CookieConsent
      enableDeclineButton
      disableStyles
      location="bottom"
      buttonText="Accept"
      declineButtonText="Reject"
      buttonClasses="button"
      declineButtonClasses="button-light"
      buttonWrapperClasses="buttons"
      cookieName="myAwesomeCookieName2"
      expires={150}
      >
        We use our own and third-party cookies to personalize content and to analyze web traffic. <a href="/policies">Read more about cookies</a>
      </CookieConsent>

      <Helmet>
        <meta name="google-site-verification" content="pGBdQUVfDpZctg_VGmAj61_OainSeGWYo5WoOZ_CRv0" />
      </Helmet>

      <div className="navigation">
        <div className="container">
          <div className="full">
            <a href="/">
              <img src={logo} className="logo" alt="Fiddle & Thorn" />
            </a>

            <ul className="menu">
              <li className="nav-link">
                <a href="/">Home</a>
              </li>
              <li className="nav-link">
                <a href="/plants/">Plant Care</a>
                <div className="dropdown">
                  <div className="container">
                    <div className="quarter">
                      <div className="link-box">
                        <p className="title">Categories</p>
                        <a href="/plants/categories/low-light">Low Light Plants</a>
                        <a href="/plants/categories/low-effort">Low Effort Plants</a>
                        <a href="/plants/categories/pet-friendly">Pet Friendly Plants</a>
                        <a href="/plants/categories/office-friendly">Office Friendly Plants</a>
                      </div>
                    </div>
                    <div className="quarter">
                      <div className="link-box rust">
                        <p className="title">Most Popular</p>
                        <a href="/plants/swiss-cheese-plant/">Monstera</a>
                        <a href="/plants/fiddle-leaf-fig/">Fiddle Leaf Fig</a>
                        <a href="/plants/chinese-money-plant/">Pilea</a>
                        <a href="/plants/rubber-plant/">Rubber Plant</a>
                      </div>
                    </div>

                    <div className="quarter">
                      <div className="image-box">
                        <StaticImage src="../images/low-effort.png" alt="Low Effort Plants" width={250} quality={20} />
                        <p className="h4">Low Effort Houseplants</p>
                        <a href="/plants/categories/low-light" className="button">View All</a>
                      </div>
                    </div>
                    <div className="quarter">
                      <div className="image-box">
                        <StaticImage src="../images/most-popular.jpg" alt="Most Popular Plants" width={250} quality={20} />
                        <p className="h4">Most Popular Houseplants</p>
                        <a href="/plants/categories/most-popular" className="button">View All</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-link">
                <a href="/journal/">Journal</a>
                <div className="dropdown">
                  <div className="container">
                    <div className="quarter">
                      <div className="link-box">
                        <p className="title">Categories</p>
                        <a href="/journal/problems">Plant Issues</a>
                        <a href="/journal/propagation">Propagation Guides</a>
                        <a href="/journal/how-to">How-To Guides</a>
                        <a href="/journal/recommendations">Recommendations</a>
                      </div>
                    </div>
                    <div className="quarter">
                      <div className="link-box rust">
                        <p className="title">Handy Guides</p>
                        <a href="/humidity-guide/">Humidity Guide</a>
                        <a href="/lighting-guide/">Lighting Guide</a>
                        <a href="/watering-guide/">Watering Guide</a>
                        <a href="/houseplants-for-beginner-plant-parents/">Beginner Houseplants</a>
                      </div>
                    </div>
                    <div className="quarter">
                      <div className="image-box">
                        <StaticImage src="../images/problems.jpg" alt="Houseplant Problems" width={250} quality={20} />
                        <p className="h4">Solve Your Plant Problems</p>
                        <a href="/journal/problems" className="button">Get Started</a>
                      </div>
                    </div>
                    <div className="quarter">
                      <div className="image-box">
                        <StaticImage src="../images/propagation.jpg" alt="Propagation Guides" width={250} quality={20} />
                        <p className="h4">Propagation Guides</p>
                        <a href="/journal/propagation" className="button">View All</a>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
              <li className="nav-link">
                <a href="/store">Store</a>
              </li>
              <li className="nav-search">
                <a href="#" className="search-toggle" aria-label="Search" onClick={toggleSearch}>
                  <img src={search} className="search" alt="search" />
                </a>
              </li>

              <li className="nav-menu">
                <a href="#" className="search-toggle" aria-label="Menu" onClick={toggleMenu}>
                  <img src={menu} className="search" alt="menu" />
                </a>
              </li>


            </ul>
          </div>
        </div>
      </div>

      <div className={`search-modal ${setActive}`} id="search">
        <Search indexName="Posts"></Search>
      </div>

      <div className={`menu-modal ${setMenu}`} id="mobileMenu">
        <div className="container">
            <ul className="menu">

              <li className="nav-link header-bar">
                <a href="/">Home</a>
                <a href="#" className="search-toggle" aria-label="Close Menu" onClick={toggleMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </a>
                <hr />
              </li>
              <li className="nav-link">
                <a href="/plants/">Plant Care</a>
                <div className="nav-submenu">
                  <div className="half">
                    <p className="title">Categories</p>
                    <a href="/plants/categories/low-light">Low Light</a>
                    <a href="/plants/categories/low-effort">Low Effort</a>
                    <a href="/plants/categories/pet-friendly">Pet Friendly</a>
                    <a href="/plants/categories/office-friendly">Office Friendly</a>
                  </div>
                  <div className="half">
                    <p className="title">Most Popular</p>
                    <a href="/plants/swiss-cheese-plant/">Monstera</a>
                    <a href="/plants/fiddle-leaf-fig/">Fiddle Leaf Fig</a>
                    <a href="/plants/chinese-money-plant/">Pilea</a>
                    <a href="/plants/rubber-plant/">Rubber Plant</a>
                  </div>
                </div>
                <hr />
              </li>
              <li className="nav-link">
                <a href="/journal/">Journal</a>
                <div className="nav-submenu">
                  <div className="half">
                    <p className="title">Categories</p>
                    <a href="/journal/problems">Plant Issues</a>
                    <a href="/journal/propagation">Propagation</a>
                    <a href="/journal/how-to">How-To</a>
                    <a href="/journal/recommendations">Recommendations</a>
                  </div>
                </div>
                <hr />
              </li>
              <li className="nav-link">
                <a href="/store">Store</a>
                <hr />
              </li>
            </ul>
        </div>
      </div>

    </>
  )
}



export default Header

import React, { useState, useRef, useEffect } from "react";
import Helmet from "react-helmet"

import { withPrefix, useStaticQuery, graphql } from "gatsby"

import Seo from '../components/seo.js';
import Search from "../components/search.js"


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
      <div className="navigation">
        <div className="container">
          <div className="full">
            <a href="/" className="h4">Fiddle &amp; Thorn</a>

            <ul className="menu">

              <li className="nav-link">
                <a href="/plants/">Plant Care</a>
                <div className="dropdown">
                  <div className="container">
                    <div className="quarter">
                      <p className="title">Categories</p>
                      <a href="/plants/categories/low-light">Low Light</a>
                      <a href="/plants/categories/low-effort">Low Effort</a>
                      <a href="/plants/categories/pet-friendly">Pet Friendly</a>
                      <a href="/plants/categories/office-friendly">Office Friendly</a>
                    </div>
                    <div className="quarter">
                      <p className="title">Most Popular</p>
                      <a href="/plants/swiss-cheese-plant/">Monstera</a>
                      <a href="/plants/fiddle-leaf-fig/">Fiddle Leaf Fig</a>
                      <a href="/plants/chinese-money-plant/">Pilea</a>
                      <a href="/plants/rubber-plant/">Rubber Plant</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-link">
                <a href="/journal/">Journal</a>
                <div className="dropdown">
                  <div className="container">
                    <div className="quarter">
                      <p className="title">Categories</p>
                      <a href="/journal/problems">Plant Issues</a>
                      <a href="/journal/propagation">Propagation</a>
                      <a href="/journal/how-to">How-To</a>
                      <a href="/journal/recommendations">Recommendations</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-link">
                <a href="/store">Store</a>
              </li>
              <li className="nav-search">
                <a href="#" className="search-toggle" aria-label="Search" onClick={toggleSearch}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </a>
              </li>

              <li className="nav-menu">
                <a href="#" className="search-toggle" aria-label="Menu" onClick={toggleMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
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

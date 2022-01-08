import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {

  return (
    <>
    <div class="footer">
      <svg class="shape" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path></svg>
      <div className="sub-footer">
        <div className="container email-subscribe">
          <div className="half">
            <p className="h4">Get our journal delivered</p>
            <p className="text-muted">From us, direct to your inbox.</p>
          </div>
          <div className="half">
              <div id="mc_embed_signup">
                <form action="https://gmail.us17.list-manage.com/subscribe/post?u=075dae5ebd3f1e67e441d373a&amp;id=76b120be04" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                  <div id="mc_embed_signup_scroll">
                    <input type="email" placeholder="Enter your email" autocomplete="off" value="" name="EMAIL" className="form-control" id="mce-EMAIL" />
                    <div id="mce-responses" class="clear">
                      <div class="response" id="mce-error-response" style={{"display":"none"}}></div>
                      <div class="response" id="mce-success-response" style={{"display":"none"}}></div>
                    </div>
                    <div style={{"position": "absolute", "left": "-5000px"}} aria-hidden="true">
                      <input type="text" name="b_075dae5ebd3f1e67e441d373a_76b120be04" tabindex="-1" value="" />
                    </div>
                    <div class="clear">
                      <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" />
                    </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
        <div className="container details">
          <div className="quarter">
            <a href="/" className="h4">Fiddle &amp; Thorn</a>
            <p className="text-muted">Helping you care for your houseplants.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/fiddleandthorn/" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#929291"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
              </a>
              <a href="https://www.facebook.com/fiddleandthorn" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="#929291"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
              </a>
              <a href="https://twitter.com/fiddleandthorn" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" fill="#929291"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
              </a>
              <a href="https://www.pinterest.co.uk/fiddleandthorn/" aria-label="Pinterest">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fill="#929291"/></svg>
              </a>
            </div>
          </div>

          <div className="fifth">
            <p className="title">Plants Index</p>
            <a href="/plants/categories/low-light/">Low Light</a>
            <a href="/plants/categories/low-effort/">Low Effort</a>
            <a href="/plants/categories/most-popular/">Most Popular</a>
          </div>

          <div className="fifth">
            <p className="title">Our Journal</p>
            <a href="/journal/problems/">Plant Issues</a>
            <a href="/journal/propagation/">Propagation</a>
            <a href="/journal/how-to/">How-to</a>
          </div>

          <div className="fifth">
            <p className="title">General</p>
            <a href="/terms-of-service/">Terms of Service</a>
            <a href="/policies/">Policies</a>
          </div>

        </div>
      </div>
      <div className="footer-note">
        <div className="container">
          <div className="full">
            <p>© Fiddle and Thorn Ltd. Company number 13713284.</p>
          </div>
        </div>
      </div>
      <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </div>
  </>
  )
}



export default Footer

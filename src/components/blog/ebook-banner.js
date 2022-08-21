import React from 'react';
import { StaticImage } from "gatsby-plugin-image"

const EbookBanner = () => {
  return (
    <div className="product-grid">
      <div className="card wide-card">
        <a href="https://fiddleandthorn.gumroad.com/l/houseplant-care-ebook" className="image-wrapper">
          <div className="card-image" style={{height: "100%"}}>
            <StaticImage src="../../images/ebook-image.png" alt="eBook Image" style={{height: "100%"}} width={700} aspectRatio={1.3333} quality={100} />
          </div>
        </a>
        <div className="card-body">
          <p className="h4"><a href="https://fiddleandthorn.gumroad.com/l/houseplant-care-ebook">Complete Houseplant Care eBook</a></p>
          <p className="description">Our comprehensive (and rather good looking) eBook that will teach you everything you need to know to successfully care for, and maintain your houseplants!</p>
          <a style={{width:"fit-content"}} href="https://fiddleandthorn.gumroad.com/l/houseplant-care-ebook?_gl=1*nptbzz*_ga*ODQxOTA1NjQzLjE2NDg0ODYzNjQ.*_ga_6LJN6D94N6*MTY0ODQ4NjM2Ni4xLjEuMTY0ODQ4OTQ4My4w" class="gumroad-button">Buy on<span class="gumroad-button-logo"></span></a>
        </div>
      </div>
    </div>
  )
}

export default EbookBanner

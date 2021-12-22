import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogLocation = ({data, counter}) => {
  const image = getImage(data.image.localFile)
  return (
    <div class="blog-location">
      <GatsbyImage image={image} alt={data.altText} />
      <div class="blog-location-information">
        <span class="badge">{counter}</span>
        <div>
          <h3 class="h2">{data.title}</h3>
          <div class="blog-location-address">
            <p>{data.shortAddress}</p>
            <p><a href={data.mapsLocation}>View on Google Maps</a></p>
          </div>
        </div>
      </div>
      <div className="blog-content-block" dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  )
}

export default BlogLocation

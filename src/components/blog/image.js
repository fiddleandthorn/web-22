import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogImage = ({data}) => {
  const image = getImage(data.localFile)
  return (
    <div class="blog-image">
      <GatsbyImage image={image} alt={data.altText} />
      {data.caption != "" &&
        <span dangerouslySetInnerHTML={{ __html: data.caption }} />
      }
    </div>
  )
}

export default BlogImage

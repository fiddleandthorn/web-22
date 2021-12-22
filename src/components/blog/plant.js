import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPlant = ({data, counter}) => {
  var image = getImage(data.selectedPlant.plantData.plantNuggetImage.localFile);
  if (data.image) {
    image = getImage(data.image.localFile);
  }
  return (
    <div class="blog-location">
      <GatsbyImage image={image} alt={data.altText} />
      <div class="blog-location-information">
        <span class="badge">{counter}</span>
        <div>
          {data.title != null &&
            <h3 class="h2">{data.title}</h3>
          }
          {data.title === null &&
            <h3 class="h2">{data.selectedPlant.plantData.plantName}</h3>
          }
          <div class="blog-location-address">
            <p>{data.selectedPlant.plantData.plantLatinName}</p>
          </div>
        </div>
      </div>
      <div class="blog-content-block">
        {data.content != null &&
          <span className="" dangerouslySetInnerHTML={{ __html: data.content }} />
        }
        {data.content === null &&
          <span className="" dangerouslySetInnerHTML={{ __html: data.selectedPlant.plantData.plantNuggetContent }} />
        }
        <p>Find out more in our <a href={data.selectedPlant.uri}>{data.selectedPlant.plantData.plantName} care guide.</a></p>
      </div>
    </div>
  )
}

export default BlogPlant

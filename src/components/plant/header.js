import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";


const PlantHeader = ({ name, latinName, image }) => {
  return (
    <div className="plant-header">
      <GatsbyImage image={image} alt={name} />
      <div className="container">
        <div className="full">
          <h1>{name} Care</h1>
          <h3>{latinName}</h3>
        </div>
      </div>
    </div>
  )
}

export default PlantHeader

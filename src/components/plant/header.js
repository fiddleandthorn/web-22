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
      <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="#FEFDFB"></path></svg>
    </div>
  )
}

export default PlantHeader

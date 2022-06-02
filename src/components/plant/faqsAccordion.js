import React from 'react';
import Accordion from "../blog/accordionItem.js";


const PlantFaqsAccordion = ({ data }) => {
  return (
    <div className="accordion-wrapper">
      {data.map((dropdown) => {
        return (
          <Accordion title={dropdown.plantFaqsSingleTitle} content={dropdown.plantFaqsSingleCopy} faq={false} />
        )
      })}
    </div>
  )
}

export default PlantFaqsAccordion

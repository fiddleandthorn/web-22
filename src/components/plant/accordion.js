import React from 'react';
import Accordion from "../blog/accordionItem.js";


const PlantAccordion = ({ data }) => {
  return (
    <div className="accordion-wrapper">
      {data.map((dropdown) => {
        return (
          <Accordion title={dropdown.plantCommonIssuesSingleTitle} content={dropdown.plantCommonIssuesSingleCopy} faq={false} />
        )
      })}
    </div>
  )
}

export default PlantAccordion

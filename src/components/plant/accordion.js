import React from 'react';
import Accordion from "../blog/accordionItem.js";


const PlantAccordion = ({ data }) => {
  return (
    <div class="accordion-wrapper">
      {data.map((dropdown) => {
        return (
          <Accordion title={dropdown.plantCommonIssuesSingleTitle} content={dropdown.plantCommonIssuesSingleCopy} faq={dropdown.plantCommonIssuesSingleFaq} />
        )
      })}
    </div>
  )
}

export default PlantAccordion

import React from 'react';
import Accordion from "../blog/accordionItem.js";


const PlantAccordion = ({ data }) => {
  return (
    <div className="accordion-wrapper" itemscope itemtype="https://schema.org/FAQPage">
      {data.map((dropdown) => {
        return (
          <Accordion title={dropdown.plantCommonIssuesSingleTitle} content={dropdown.plantCommonIssuesSingleCopy} faq={dropdown.plantCommonIssuesSingleFaq} />
        )
      })}
    </div>
  )
}

export default PlantAccordion

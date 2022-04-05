import React from 'react';
import Accordion from "./accordionItem.js";


const BlogAccordion = ({ data }) => {
  return (
    <div className="accordion-wrapper">
      {data.map((dropdown) => {
        return (
          <Accordion title={dropdown.title} content={dropdown.body} faq={dropdown.faqCheck} />
        )
      })}
    </div>
  )
}

export default BlogAccordion

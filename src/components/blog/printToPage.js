import React from 'react';

const BlogPrintToPage = ({ data }) => {
  return (
    <div className="print-to-page">
      {data.map((dropdown) => {
        return (
          <>
            <h4 className="">{dropdown.title}</h4>
            <span className="text-muted" dangerouslySetInnerHTML={{ __html: dropdown.body }}/>
            <hr />
          </>
        )
      })}
    </div>
  )
}

export default BlogPrintToPage

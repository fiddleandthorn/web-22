import React from 'react';

const BlogList = ({items, check}) => {
  return (
    <ul className="blog-list-block">
      {items.map((blob, index) => {
        return (
          <li>
            {check === "number" &&
              <span className="badge">{index + 1}</span>
            }
            {check === "check" &&
              <span className="badge">+</span>
            }
            <span className="list-item" dangerouslySetInnerHTML={{ __html: blob.listItem }} />
          </li>
        )
      })}
    </ul>
  )
}

export default BlogList

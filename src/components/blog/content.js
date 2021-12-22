import React from 'react';

const BlogContent = (content) => {
  return (
    <div className="blog-content-block" dangerouslySetInnerHTML={{ __html: content.content }} />
  )
}

export default BlogContent

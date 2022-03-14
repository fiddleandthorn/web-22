import React from 'react';
import AdSense from 'react-adsense';

const BlogAd = () => {
  return (
    <AdSense.Google
      client='ca-pub-3791928853233682'
      slot='6642185036'
      style={{ display: 'block' }}
      format='auto'
      responsive='true'
    />
  )
}

export default BlogAd

import React from 'react';
import AdSense from 'react-adsense';

const BlogAd = () => {
  return (
    // <AdSense.Google
    //   client='ca-pub-3791928853233682'
    //   slot='6642185036'
    //   style={{ display: 'block' }}
    //   format='auto'
    //   responsive='true'
    //   layoutKey='-gw-1+2a-9x+5c'
    //   data-adtest="on"
    // />
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3791928853233682" crossorigin="anonymous"></script>
      <ins class="adsbygoogle"
        style="display:block"
         data-ad-client="ca-pub-3791928853233682"
         data-ad-slot="6642185036"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
      <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </>
  )
}

export default BlogAd

import React from 'react';

import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  PinterestIcon,
  RedditIcon,
  TwitterIcon
} from "react-share";

const ShareLinks = ({ path, image }) => {
  var url = "https://fiddleandthorn.com" + path;
  return (
    <div className="share-links">
      <p class="text-muted">SHARE:</p>
      <TwitterShareButton url={url} related={["@fiddleandthorn"]}>
        <TwitterIcon size={30} round={true} />
      </TwitterShareButton>
      <FacebookShareButton url={url}>
        <FacebookIcon size={30} round={true} />
      </FacebookShareButton>
      <PinterestShareButton url={url} media={image}>
        <PinterestIcon size={30} round={true} />
      </PinterestShareButton>
      <RedditShareButton url={url}>
        <RedditIcon size={30} round={true} />
      </RedditShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={30} round={true} />
      </EmailShareButton>
    </div>
  )
}



export default ShareLinks

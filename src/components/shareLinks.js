import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
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

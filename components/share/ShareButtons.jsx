import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  EmailIcon,
  EmailShareButton,
} from "next-share";
import { createEmojiInStringTemplate } from "../../helpers/createEmojiInStringTemplate";


const ShareButtons = ({ url }) => {
  const heartEmoji = createEmojiInStringTemplate("2764");
  const thanksEmoji = createEmojiInStringTemplate("1f64f");
  const eyeEmoji = createEmojiInStringTemplate("1f440");

  const campaignMessage = `Hey! Check out my campaign ${eyeEmoji}. Please give or share to raise awareness ${thanksEmoji} ${heartEmoji} #LetsDoSomeGood ${url}`;
  return (
    <div className="flex my-2">
      <div className="flex justify-center">
        <FacebookShareButton
          url={url}
          className="p-2"
          quote={campaignMessage}
          hashtag={"#LetsDoSomeGood"}>
          <FacebookIcon size={32} className="m-2" round />
        </FacebookShareButton>

        <TwitterShareButton
          url={url}
          quote={campaignMessage}
          hashtag={"#LetsDoSomeGood"}>
          <TwitterIcon size={32} className="m-2" round />
        </TwitterShareButton>

        <LinkedinShareButton
          url={url}
          quote={campaignMessage}
          hashtag={"#LetsDoSomeGood"}>
          <LinkedinIcon size={32} className="m-2" round />
        </LinkedinShareButton>

        <WhatsappShareButton
          url={url}
          quote={campaignMessage}
          hashtag={"#LetsDoSomeGood"}>
          <WhatsappIcon size={32} className="m-2" round />
        </WhatsappShareButton>
        <EmailShareButton
          url={url}
          quote={campaignMessage}
          hashtag={"#LetsDoSomeGood"}>
          <EmailIcon size={32} className="m-2" round />
        </EmailShareButton>
      </div>
    </div>
  );
};

export default ShareButtons;

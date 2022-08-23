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
} from "next-share";
import { createEmojiInStringTemplate } from "../../helpers/createEmojiInStringTemplate";

const Share = () => {
  const heartEmoji = createEmojiInStringTemplate("2764");
  const thanksEmoji = createEmojiInStringTemplate("1f64f");
  const eyeEmoji = createEmojiInStringTemplate("1f440");

  const url = "window.location.href";
  const campaignMessage = `Hey! Check out my campaign ${eyeEmoji}. Please give or share to raise awareness ${thanksEmoji} ${heartEmoji} #LetsDoSomeGood ${url}`;
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col items-center p-5 rounded-lg shadow bg-white">
        <p className="block text-[1.31rem] text-black  font-semibold">
          Share the cause
        </p>
        <div className="flex">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;

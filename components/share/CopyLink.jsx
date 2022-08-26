import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { createEmojiInStringTemplate } from "../../helpers/createEmojiInStringTemplate";

const CopyLink = ({ url }) => {
  return (
    <div className="flex container justify-center items-center gap-2 flex-col md:flex-row">
      <div className="bg-gray-200 p-3 rounded-lg w-full md:w-3/4">
        <p className="text-left truncate whitespace-no-wrap">{url}</p>
      </div>
      <ButtonPrimary
        text="Copy Link"
        actionHandler={() => navigator.clipboard.writeText(url)}
        className="inline-flex min-w-fit items-center"
      />
    </div>
  );
};

export default CopyLink;

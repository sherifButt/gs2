import React from "react";
import ShareButtons from "./ShareButtons";

const ShareWidget = ({ url }) => {
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col items-center rounded-lg shadow bg-white p-5 pb-6">
        <p className="block text-[1.31rem] text-black  font-semibold">
          Share the Cause
        </p>

        <div className="flex justify-center">
          <ShareButtons url={url} />
        </div>

        <p className="block text-center text-sm text-black  font-light">
          Sharing this page could bring in 5x more donations!
        </p>
      </div>
    </div>
  );
};

export default ShareWidget;

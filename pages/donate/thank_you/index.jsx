import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ShareButtons from "../../../components/share/ShareButtons";
import CopyLink from "../../../components/share/CopyLink";

const ThankYou = () => {
  const router = useRouter();

  let { quickCode, donatorName } = router.query;

  let url = `${process.env.publicUrl}/basecamp/fundraiser-campaign/${quickCode}`;

  return (
    <div className="flex flex-col gap-[1.88rem] justify-start items-center max-w-[31.44rem] mx-auto text-center">
      <div>
        <img
          className="block"
          src="/assets/images/assets/image-9841.856701604602.png"
        />
      </div>
      <p className="block text-center text-2xl font-medium mb-2">
        Thank you {donatorName} for your donation! A receipt has been sent to
        your email.
      </p>
      <div className="flex flex-col items-center text-center container mx-auto">
        <div>
          <p className="block text-2xl text-black  font-medium">
            Make an even bigger difference!
          </p>
          <p className="block text-center text-sm text-black ">
            Sharing this page could bring in 5x more donations!
          </p>
        </div>
        <ShareButtons url={url} />
        <CopyLink url={url} />
      </div>
      <img
        className="block"
        src="/assets/images/assets/image-61032.08142993069.png"
      />
      <div className="flex flex-col items-center">
        <p className="block text-[1.69rem] text-black  font-medium">
          Download our app
        </p>
        <p className="block w-[24.88rem] text-center text-sm text-black  font-light">
          Download our GiveStar app to see your donation attached to your
          for-good profile and share with friends!
        </p>
        <div className="flex gap-6 mt-5">
          <img
            className="block"
            src="/assets/images/assets/image-22440.838951564434.png"
          />
          <img
            className="block"
            src="/assets/images/assets/image-47925.30387624736.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYou;

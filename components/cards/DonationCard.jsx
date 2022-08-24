import { Transition } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { like } from "../../features/postsSlice";
import AvatarUser from "../avatar/AvatarUser";
const PostLastUpdate = ({ data }, { ...props }) => {
  const [_data, setData] = useState(data);
  useEffect(() => {
    setData(data);
  }, [data]);
  return (
    <div {...props}>
      <div className=" flex flex-col gap-2 justify-center items-start   mx-auto md:mx-0 pt-5 pb-5 bg-white sm:max-w-lg sm:rounded-xl  mt-6 md:mt-0 mb-0 md:mb-10 ">
        <div className="flex flex-row flex-wrap sm:flex-nowrap  justify-start items-start w-full">
          <div className=" flex flex-col gap-4 mb-2 justify-start items-center h-full">
            {/*   
                  <AvatarUser />
                  */}

            <img
              className="block rounded-full w-16 border-2 border-white"
              src="https://media.givestar.io/static/anon-user.png"
            />
          </div>
          <div className="flex flex-col gap-2.5 justify-start items-start w-full  pl-0 sm:pl-5 pb-5">
            <p className="block text-lg text-block italic font-normal scratch">
              {_data?.donatorName === "" ? "Anonymous" : _data?.donatorName}
            </p>
            <p className="block text-neutral-500 ">{data?.donationAgeText}</p>
            <p className="block  text-black ">{_data?.donatorMessage}</p>
          </div>
          <div className="max-w-[8rem] mx-auto w-full">
            <p className="block text-right text-[1.56rem] text-army-500  font-semibold">
              {_data?.currencySymbol}
              {_data?.donationValue.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </p>
            <p className="block text-right text-neutral-500  font-light ">
              {_data?.giftAidValue > 0
                ? "+" +
                  data?.currencySymbol +
                  data?.giftAidValue.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  }) +
                  " GiftAid"
                : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLastUpdate;

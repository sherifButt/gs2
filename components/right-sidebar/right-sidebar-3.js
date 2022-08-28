import { useRouter } from "next/router";
import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import ShareWidget from "../share/ShareWidget";
import PostLastUpdate from "../cards/PostLastUpdate1";
import VerticalMenu from "../v-menu-1";
import Event from "../cards/EventSimpleCard";

const RightSidebar = (props) => {
  const router = useRouter();

  const url = process.env.publicUrl + router.asPath;

  console.log(url);

  return (
    <aside {...props}>
      {props.children}

      <div className=" flex grow h-full w-full  flex-col  items-center md:items-left md:w-290 xl:w-78 ">
        <div className="w-full">
          {/* Call To Action */}
          {/* <div>RightSidebars call to action</div> */}
          <div className=" fixed top-20 lg:hidden shadow-xl w-full flex flex-row pt-1 rounded-b-xl pb-3 px-3 gap-2 bg-yellow-400">
            <ButtonPrimary
              textColor="text-white"
              text="Give Now"
              className="lg:mb-4 w-full bg-orange-400 text-white   font-thin lg:min-w-64 bg-no-repeat bg-contain bg-[left-20px] text-md py-3"
              actionHandler={() => {
                router.push(props.giveNowLink || "/donate");
              }}
            />
            {/*   
                  <ButtonPrimary
                     textColor='text-white'
                     text='FUNDRAISE'
                     className='lg:mb-4 w-full bg-neutral-600 text-white   font-thin lg:min-w-64 bg-no-repeat bg-contain bg-[left-20px] text-md py-3'
                     actionHandler={() => {
                        router.push('/basecamp/giv-now')
                     }}
                  />
                  */}
          </div>
          {/* /Call To Action */}
          <div className="  flex-col justify-between  hidden md:block">
            {/* <PostLastUpdate /> */}
          </div>
        </div>
        {/* Moving footer */}
        <div className="sticky top-28 hidden md:block z-10">
          {/* <PostLastUpdate /> */}

          <ButtonPrimary
            text="GIVE NOW"
            className="lg:mb-4 w-full bg-orange-400 text-white font-thin lg:min-w-64 bg-button-texture bg-no-repeat bg-contain bg-[left-20px] text-lg py-3"
            actionHandler={() => {
              router.push(props.giveNowLink || "/donate");
            }}
          />

          <ShareWidget url={url} />

          {/* <Event /> */}
        </div>
        {/* /Moving footer */}
      </div>
    </aside>
  );
};

export default RightSidebar;

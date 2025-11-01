import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import { useState } from "react";
import ReqPostCart from "./ReqPostCart";

function ReqUserPostPart() {
  const [activeTab, setActiveTab] = useState();
  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable></AiOutlineTable>,
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine></RiVideoAddLine>,
    },
    {
      tab: "Saved",
      icon: <BiBookmark></BiBookmark>,
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser></AiOutlineUser>,
    },
  ];

  return (
    <>
      <div className="flex space-x-14 border-t relative ">
        {tabs.map((item) => (
          <div
            onClick={() => setActiveTab(item.tab)}
            className={`${
              activeTab == item.tab ? "border-t border-black" : "opacity-70"
            } flex items-center py-2 text-sm cursor-pointer`}
          >
            <p>{item.icon}</p>
            <p className="ml-1">{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-wrap">
          {[1, 1, 1, 1, 1, 1, 1].map((item) => (
            <ReqPostCart />
          ))}
        </div>
      </div>
    </>
  );
}

export default ReqUserPostPart;

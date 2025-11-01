import React from "react";
import StoryCircle from "../../Components/Story/StoryCircle";
import HomeRight from "../../Components/HomeRight/HomeRight";
import PostCart from "../../Components/Post/PostCart";

export default function HomePage() {
  return (
    <>
      <div className="mt-3 flex w-full justify-center  ">
        <div className="w-[44%] px-10">
          <div className="storyDiv flex space-x-5 w-full justify-start p-5  border-zinc-500 rounded-md border">
            {[1, 1, 1, 1].map((item) => (
              <StoryCircle />
            ))}
          </div>
          <div className="space-y-10 w-full mt-10">
            {[1, 1, 1].map(() => (
              <PostCart />
            ))}
          </div>
        </div>
        <div className="w-[35%]">
          <HomeRight />
        </div>
      </div>
    </>
  );
}

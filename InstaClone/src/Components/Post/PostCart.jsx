import { BsBookmark, BsBookmarksFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";

import "./PostCart.css";
import { useState } from "react";
import {  AiFillHeart, AiOutlineHeart } from "react-icons/ai";
function PostCart() {
  const [showDropDown, setShowDropDown] = useState(false); // for delete button
  const [isPostLiked, setisPostLiked] = useState(false); // for post like
  const [isPostSave, setIsPostSave] = useState(false); // for save post

  const handleSavePost = () => {
    setIsPostSave(!isPostSave);
  };

  const handlePostLike = () => {
    setisPostLiked(!isPostLiked);
  };
  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };
  return (
    <>
      <div>
        <div className="border border-zinc-500 rounded-md w-full">
          <div className="flex justify-between items-center w-full py-4 px-5">
            <div className="flex pl-2">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.pexels.com/photos/29754964/pexels-photo-29754964.jpeg?w=360&h=468&fit=crop&dpr=1"
                alt=""
              />
              <div className="pl-2">
                <p className="font-semibold text-sm">username</p>
                <p className="font-thin text-sm">location</p>
              </div>
            </div>
            <div className="dropdown ">
              <BsThreeDots className="dots" onClick={handleClick} />
              <div className="dropdown-content">
                {showDropDown && (
                  <p className="bg-black text-white py-1 px-4  rounded-md cursor-pointer">
                    Delete
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full h-85">
            <img
              className="w-full h-full"
              src="https://images.pexels.com/photos/14517533/pexels-photo-14517533.jpeg?w=360&h=468&fit=crop&dpr=1"
              alt=""
            />
          </div>
          <div className="flex justify-between py-2 px-4">
            <div className="flex space-x-2 justify-center">
              {/* //ternary operater */}
              {isPostLiked ? (
                <AiFillHeart
                  onClick={handlePostLike}
                  className="text-red-700 text-2xl"
                />
              ) : (
                <AiOutlineHeart onClick={handlePostLike} className="text-2xl" />
              )}
              <FaRegComment className="text-xl  hover:opacity-50 cursor-pointer" />{" "}
              <RiSendPlaneLine className="text-xl  hover:opacity-50 cursor-pointer" />
            </div>
            <div className="cursor-pointer">
              {isPostSave ? (
                <BsBookmarksFill onClick={handleSavePost} />
              ) : (
                <BsBookmark onClick={handleSavePost} />
              )}
            </div>
          </div>
          <div className="w-full py-2 px-4">
            <p>10 likes</p>
            <p className="opacity-60 cursor-pointer">view all 10 comments</p>
          </div>
          <div className="px-4 w-full border-t">
            <div className="flex w-full items-center ">
              <BsEmojiSmile/>
              <input  className="commentInput py-2"
              type="text" placeholder="Add comment.... " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostCart;

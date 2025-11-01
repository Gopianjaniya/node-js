import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function sidebar() {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();
  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title == "Profile") {
      navigate("/username");
    } else if (title == "Home") {
      navigate("/");
    }
  };

  return (
    <>
      <div className="sticky top-0 h-screen flex flex-col justify-between">
        <div>
          <div className="mt-5">
            <img
              className="w-40"
              src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram-1.png"
              alt=""
            />
          </div>
          <div>
            {menu.map((item) => (
              <div
                onClick={() => handleTabClick(item.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                {/* for icon */}
                {activeTab == item.title ? item.activeIcon : item.icon}


                {/* for title  */}
                <p
                  className={`${
                    activeTab == item.title ? "font-bold" : "font-semibold"
                  }`}
                >
                {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center cursor-pointer pb-10">
          <IoReorderThreeOutline className="text-2xl" />
          <p className="ml-5">More</p>
        </div>
      </div>
    </>
  );
}

import { TbCircleDashed } from "react-icons/tb";
function ProfileCompo() {
  return (
    <>
      <div className="py-18 pl-10 flex  ">
        <div className="w-[15%]">
          <img
            className="w-28 h-28 rounded-full"
            src="https://images.pexels.com/photos/15770959/pexels-photo-15770959.jpeg?w=360&h=468&fit=crop&dpr=1"
            alt=""
          />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>username</p>
            <button>Edit_Profile</button>
            <TbCircleDashed></TbCircleDashed>
          </div>

          <div className="flex space-x-10 mt-5 items-center  ">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>post</span>
            </div>
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>follower </span>
            </div>
            <div>
              {" "}
              <span className="font-semibold mr-2">10</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">full name</p>
            <p className="font-thin text-sm">
               𝐂𝐡𝐨𝐤𝐨𝐥𝐚𝐭𝐞 𝐏𝐫𝐢𝐝𝐞 🍟 𝐏𝐨𝐩𝐜𝐨𝐫𝐧𝐬 𝐋𝐨𝐯𝐞𝐫 📕 𝐄𝐧𝐠𝐢𝐧𝐞𝐞𝐫 𝐁𝐲 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 🍕
              𝐏𝐢𝐳𝐳𝐚 𝐏𝐚𝐫𝐭𝐲 𝐄𝐯𝐞𝐫𝐝𝐚𝐲𝐬 📝 𝐃𝐦 𝐅𝐨𝐫 𝐏𝐚𝐢𝐝 𝐏𝐫𝐨𝐦𝐨𝐭𝐢𝐨𝐧
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCompo;

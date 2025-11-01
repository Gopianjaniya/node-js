import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from "react-icons/fa";
import './ReqPostCart.css'

function ReqPostCart() {
  return (
    <>
      <div className="p-2">
        <div className="post w-50 h-50 ">
          <img className='cursor-pointer'
            src="https://images.pexels.com/photos/16443120/pexels-photo-16443120.jpeg?w=360&h=468&fit=crop&dpr=1"
            alt=""
          />
          <div className='overlay'>
            <div className=" overlay-text flex justify-between">
              <div>
                <AiFillHeart></AiFillHeart>
                <span>10</span>
              </div>
              <div>
                <FaComment /> <span>30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReqPostCart
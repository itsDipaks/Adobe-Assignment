import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {DeletePost} from "../Redux/Posts/Post.action";
import {GetlocalStorageData} from "../assets/Localstorage";

const PostCard = ({data, getPostListdata, no}) => {
  let dispatch = useDispatch();
  let Userid = GetlocalStorageData("Userid");
  let deletepost = () => {
    dispatch(DeletePost(data._id, Userid));
    setTimeout(() => {
      getPostListdata();
    }, 2000);
  };

  let editpost=()=>{
    
  }
  return (
    <>
      <section className="text-gray-600 bg-gray-100 body-font overflow-hidden w-max m-2 rounded-4 border-gray-500">
        <div className=" px-5  mx-auto">
          <div className="">
            <div className="p-8 md:w-full  items-start">
              <h1 className="sm:text-xl text-xl xs:text-xs font-medium text-gray-400 ">
                Sr.No. {no + 1}
              </h1>
              <h4 className="sm:text-2xl text-xl font-medium text-gray-900 mt-4 mb-4"></h4>
              <h1 className="leading-relaxed mb-8 xs:mb-2 font-medium w-96 xs:w-full text-gray-900  ">
                {data?.content}
              </h1>

              <div className="pb-2  border-b-2 border-gray-100 mt-auto w-full">
                <div className="flex text-gray-800  inline-flex items-center ml-auto leading-none text-sm pr-3 gap-4 py-1  border-gray-500">
                  <button   onClick={editpost} className="inline-flex items-center bg-green-300 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded hover:text-white text-base mt-4 md:mt-0">
                    Edit
                  </button>
                  <button
                    onClick={deletepost}
                    className="inline-flex items-center bg-red-300 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded hover:text-white text-base mt-4 md:mt-0"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostCard;

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PostAnyalyeticsCount} from "../Redux/Posts/Post.action";

const PostCount = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostAnyalyeticsCount());
  }, []);


  let {PostData} = useSelector((store) => store.post);
console.log(PostData)
  return (
    <div className="p-4  w-96 xs:w-full m-auto text-center">
       <h1 className="text-center text-indigo-600 text-lg p-4  font-medium title-font cursor-pointer text-center">Total Number Of Post</h1> 
      <div className="border-2 border-gray-200 m-auto w-full py-6 rounded-lg">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="text-indigo-500 w-12 h-12 mb-3 inline-block"
          viewBox="0 0 24 24"
        >
          <path d="M8 17l4 4 4-4m-4-5v9"></path>
          <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
        </svg>
        <h2 className="title-font font-medium text-3xl text-gray-900">
          {" "}
          Posts : {PostData?.length}
        </h2>
        <p className="leading-relaxed">Total</p>
      </div>
    </div>
  );
};

export default PostCount;

import React, {useEffect} from "react";
import PostCard from "../../components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {GetAllPosts} from "../../Redux/Posts/Post.action";
import {SingleUser} from "../../Redux/Users/User.action";

const PostList = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    getPostListdata();
  }, []);

  let getPostListdata = () => {
    dispatch(GetAllPosts());
  };
  let {PostData} = useSelector((store) => store.post);

  console.log(PostData);
  return (
    <>
      <h1 class="sm:text-4xl text-3xl text-center font-medium  mb-14 title-font mb-2 text-gray-900">
        Post List
      </h1>
      <div className="flex xs:w-full  w-11/12 m-auto justify-evenly flex-wrap ">
        {PostData?.map((el, index) => (
          <PostCard
            data={el && el}
            key={index}
            getPostListdata={getPostListdata}
            no={index}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;

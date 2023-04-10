import React, {useState} from "react";
import {GetlocalStorageData} from "../../assets/Localstorage";
import {useDispatch, useSelector} from "react-redux";
import {AddNewPost} from "../../Redux/Posts/Post.action";

const AddPost = () => {
  let [postdata, setpostdata] = useState("");
  let dispatch = useDispatch();
  let [error, seterror] = useState("");

  let {loading} = useSelector((store) => store.post);

  let handeldpostinput = (e) => {
    if (e.target.value.length <= 300) {
      setpostdata(e.target.value);
    }
  };

  let Userid = GetlocalStorageData("Userid");
  let addnewpost = () => {
    if (postdata.length > 0) {
      dispatch(AddNewPost(postdata, Userid));
      setTimeout(() => {
        setpostdata("");
      }, 3000);
    } else {
      seterror("Please Add Content");
      setTimeout(() => {
        seterror("");
      }, 4000);
    }
  };

  return (
    <>
      <section class="text-gray-600 body-font relative sm:w-4/5 xs:w-4/5 w-1/2 m-auto xs:mt-8 mt-14 ">
        <h2 class="text-gray-500 text-4xl xs:text-2xl  mb-1 font-medium title-font text-center">
          Add New Post
        </h2>

        {error && error ? (
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded absolute"
            role="alert"
          >
            <span class="block sm:inline">{error}</span>
          </div>
        ) : (
          ""
        )}
        <div class="p-2 w-full">
          <div class="relative ">
            <textarea
              id="message"
              name="message"
              value={postdata}
              onChange={(e) => handeldpostinput(e)}
              class="w-full bg-gray-100 xs:mt-4    mt-14 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
            <h1 className="text-right">{postdata.length}/300</h1>
          </div>
        </div>

        <div class="p-2 w-1/3 m-auto">
          <button
            onClick={addnewpost}
            class=" mx-auto text-white bg-indigo-500 border-0 py-2  w-full focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {loading ? "Loading" : "Post"}
          </button>
        </div>
      </section>
    </>
  );
};

export default AddPost;

import React from "react";

const AddPost = () => {
  return (
    <>
      <section class="text-gray-600 body-font relative w-1/2 m-auto mt-14 "  >
        <h2 class="text-gray-500 text-4xl mb-1 font-medium title-font text-center">
          Add New Post
        </h2>
        <div class="p-2 w-full" >
          <div class="relative ">
            <textarea
              id="message"
              name="message"
          
              class="w-full bg-gray-100     mt-14 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
         <h1 className="text-right">0/300</h1>
          </div>
        </div>

        <div class="p-2 w-1/3 m-auto">
          <button class=" mx-auto text-white bg-indigo-500 border-0 py-2  w-full focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Post 
          </button>
        </div>
      </section>
    </>
  );
};

export default AddPost;

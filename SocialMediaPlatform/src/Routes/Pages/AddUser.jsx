import React from "react";
import { useState } from "react";

const AddUser = () => {
const [userform,setuserform]=useState({})

const handelduserinputs=()=>{

}
  const submituserdata=()=>{

  }


  return (
    <div>
      <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full m-auto md:py-8 mt-8 md:mt-0">
        <h2 class="text-gray-500 text-4xl mb-1 font-medium title-font text-center">
          Add User
        </h2>
        <form onSubmit={submituserdata}>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={handelduserinputs}
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handelduserinputs}
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">
            Bio
          </label>
          <textarea
            id="message"
            name="message"
            required
            onChange={handelduserinputs}
            placeholder="Contetnt should between  0-200 words "
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          >gg</textarea>
        </div>
        <button type="submit" class="text-white bg-indigo-500 border-0 py-2  w-full m-auto  focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>

        </form>
        <p class="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </div>
  );
};

export default AddUser;

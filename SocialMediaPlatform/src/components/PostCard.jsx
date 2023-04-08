import React from "react";

const PostCard = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className=" px-5 py-24 mx-auto">
          <div className="">
            <div className="p-12 md:w-full  items-start">
              <h4 className="sm:text-2xl text-xl font-medium text-gray-900 mt-4 mb-4">
                Roof party normcore before they sold out, cornhole vape
              </h4>
              <p className="leading-relaxed mb-8">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid
              </p>

              <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                <div className="text-gray-800 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 gap-4 py-1 border-r-2 border-gray-500">
                  <button className="inline-flex items-center bg-indigo-300 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 hover:text-white rounded text-base mt-4 md:mt-0">
                    View
                  </button>
                  <button className="inline-flex items-center bg-green-300 border-0 py-1 px-3 focus:outline-none hover:bg-green-500 rounded hover:text-white text-base mt-4 md:mt-0">
                    Edit
                  </button>
                  <button className="inline-flex items-center bg-red-300 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded hover:text-white text-base mt-4 md:mt-0">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostCard;

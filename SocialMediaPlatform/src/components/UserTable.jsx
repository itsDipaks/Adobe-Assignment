import React from "react";

const UserTable = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-8">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Table Name
            </h1>
          </div>
          <div class=" w-4/5 mx-auto ">
            <table class="table-auto w-full text-left p-2">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Id
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Name
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Email
                  </th>
                  <th class="px-4 ml-14 py-3 title-font tracking-wider text-center font-medium text-gray-900 text-sm bg-gray-100">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-4 py-3">1</td>
                  <td class="px-4 py-3">itsdipak</td>
                  <td class="px-4 py-3">dipak@gmail.com</td>
                  <td class="px-2 py-3 flex text-lg text-gray-900">

                    <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded">
                      View
                    </button>
                    <button class="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded">
                      Edit
                    </button>
                    <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-800 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserTable;

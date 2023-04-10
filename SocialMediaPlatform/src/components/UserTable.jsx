import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {DeleteUser} from "../Redux/Users/User.action";
import axios from "axios";
import {Backendurl} from "../assets/Url";
const UserTable = () => {
  let [data, setdata] = useState([]);
  let [loading, setloading] = useState(false);
  let dispatch = useDispatch();
  useEffect(() => {
    getusersdata();
  }, []);
  let getusersdata = async () => {
    setloading(true);
    try {
      let AllUsersdata = await axios.get(`${Backendurl}/users`);
      let usersdata = AllUsersdata.data.data;
      setdata(usersdata);
      setloading(false);
    } catch (err) {
      console.log(err);
      setloading(false);
    }
  };
  let deleteuserdata = (el) => {
    dispatch(DeleteUser(el._id));
    setTimeout(() => {
      getusersdata();
    }, 2000);
  };
  return (
    <>
      <section class="text-gray-600 body-font w-full">
        <div class="container px-5  py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-8">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Users List
            </h1>
          </div>
          <div class=" w-11/12 mx-auto xs:w-full ">
            <table class="table-auto w-full  text-left p-2">
              <thead>
                <tr>
                  <th class="px-4 py-3 title-font tracking-wider font-medium  xs:px-2 xs:py-1 text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Id
                  </th>
                  <th class="px-4 py-3 title-font tracking-wider font-medium  xs:px-2 xs:py-1  text-gray-900 text-sm bg-gray-100">
                    Name
                  </th>
                  <th class="px-4 py-3 xs:py-1 xs:px-1 title-font tracking-wider  xs:px-2 xs:py-1  font-medium text-gray-900 text-sm bg-gray-100">
                    Email
                  </th>
                  <th class="px-4 ml-14 py-3 title-font tracking-wider text-center  xs:px-2 xs:py-1  font-medium text-gray-900 text-sm bg-gray-100">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <div class="text-right">
                    <div role="status" className="absolute left-1/2 top-96">
                      <svg
                        aria-hidden="true"
                        class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  data &&
                  data?.map((el, index) => (
                    <tr key={index}>
                      <td class="px-4 py-3">{index + 1}</td>
                      <td class="px-4 py-3">{el?.name}</td>
                      <td class="px-4 py-3">{el?.email}</td>
                      <td class="px-2 py-3 flex text-lg text-gray-900">
                        {/* <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 xs:px-2 xs:py-1 px-6 focus:outline-none hover:bg-indigo-800 rounded">
                    View
                  </button> */}
                        <button class="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 xs:px-2 xs:py-1 focus:outline-none hover:bg-green-800 rounded">
                          Edit
                        </button>
                        <button
                          onClick={() => deleteuserdata(el)}
                          class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 xs:px-2 xs:py-1 focus:outline-none hover:bg-red-800 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserTable;

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ActiveUsersAnyalyetics} from "../Redux/Users/User.action";

const ActiveUser = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    getActiveusersdata();
  }, []);

  let {data} = useSelector((store) => store.user);


  let getActiveusersdata = () => {
    dispatch(ActiveUsersAnyalyetics());
  };

  return (
    <div>
       <h1 className="text-center text-indigo-600 text-lg p-4  font-medium title-font cursor-pointer text-center">Top Active Users</h1> 
      {data?.map((el,index) => (
        <div class="py-1 sm:w-full w-full m-2 bg-gray-100 pl-14 pr-14">
     
          <div class="rounded flex p-4  h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              className="text-indigo-500 w-8 h-8"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 text-indigo-800"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span class="title-font font-medium ml-8">{el.name}</span>
            
          </div>
          <p class="title-font font-medium ml-8 w-full "> eamil : {el.email}</p>
          <p class="title-font font-medium ml-24">
        
            Total Posts : {el.postcount}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ActiveUser;

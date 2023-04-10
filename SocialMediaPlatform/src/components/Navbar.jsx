import React from "react";
import {Link} from "react-router-dom";
import {GiWrappingStar} from "react-icons/gi";
const Navbar = () => {
  let Routes = [
    {id: 1, Name: "Home", Link: "/"},
    {id: 2, Name: "AddUser", Link: "/adduser"},
    {id: 3, Name: "AddPost", Link: "/addpost"},
    {id: 4, Name: "UserList", Link: "/userlist"},
    {id: 5, Name: "PostList", Link: "/postlist"},
    {id: 6, Name: "Analytics", Link: "/analytics"},
  ];
  return (
    <>
      <header className="text-gray-600 body-font border-b-2">
        <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row sm:flex-row xs:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <GiWrappingStar style={{width: "50px", height: "50px"}} />
            <span className="ml-3 text-xl">Social Media</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {Routes.map((el,index) => (
              <Link to={el.Link}>
                <h3 key={index} className="mr-8 py-1 xs:mr-2  rounded px-2 m-1 xs:text-xs  bg-indigo-400 hover:bg-indigo-700 text-white">{el.Name} </h3>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;

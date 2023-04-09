import React from "react";
import {Link} from "react-router-dom";
import {GiWrappingStar} from "react-icons/gi";
const Navbar = () => {
  let Routes = [
    {id: 1, Name: "Home", Link: "/"},
    {id: 2, Name: "AddUser", Link: "/adduser"},
    {id: 3, Name: "AddPost", Link: "/addpost"},
    {id: 4, Name: "UserList", Link: "/userlist"},
    {id: 4, Name: "PostList", Link: "/postlist"},
  ];
  return (
    <>
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <GiWrappingStar style={{width: "50px", height: "50px"}} />
            <span className="ml-3 text-xl">Social Media</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {Routes.map((el) => (
              <Link to={el.Link}>
                {" "}
                <h3 className="mr-14">{el.Name} </h3>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;

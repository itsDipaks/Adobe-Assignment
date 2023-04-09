import React, {useEffect} from "react";
import UserTable from "../../components/UserTable";
import {useDispatch} from "react-redux";
import {AllUsers} from "../../Redux/Users/User.action";

const UserList = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    getusersdata();
  }, []);

  let getusersdata = () => {
    dispatch(AllUsers());
  };

  return (
    <div>
      <UserTable getusersdata={getusersdata} />
    </div>
  );
};

export default UserList;

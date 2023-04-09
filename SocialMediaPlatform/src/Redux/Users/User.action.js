
import Swal from "sweetalert2";
import { Backendurl } from "../../assets/Url";
import { USER_GET_LOADING,USER_GET_SUCESS,USER_GET_ERROR } from "./User.types";
import axios from "axios"


export let AddnewUser = (formdata) => async (dispatch) => {
    dispatch({type: USER_GET_LOADING});
    try {
      let User = await axios.post(`${Backendurl}/users`, formdata);
      let userdata=User.data.data
      console.log(User)
      dispatch({type: USER_GET_SUCESS ,payload:{data:userdata,msg:User.data.msg}});

    } catch (err) {
      let errormsg=err.response.data.msg
      dispatch({type: USER_GET_ERROR,payload:{msg:errormsg}});
    }
  };





  export let AllUsers = () => async (dispatch) => {
    dispatch({type: USER_GET_LOADING});
  
    try {
      let AllUsersdata = await axios.get(`${Backendurl}/users`);
      let usersdata=AllUsersdata.data.data
      console.log(usersdata)
      dispatch({type: USER_GET_SUCESS, payload: {data:usersdata}});

    }  catch (err) {
      let errormsg=err.response.data.msg
      dispatch({type: USER_GET_ERROR,payload:{msg:errormsg}});
    }
  };
  


  export let SingleUser = (userid) => async (dispatch) => {
    dispatch({type: USER_GET_LOADING});
  
    try {
      let SingleUserData = await axios.get(`${Backendurl}/users/${userid}`);
      let userdata=SingleUserData.data.data
      console.log(userdata)
      dispatch({type: USER_GET_SUCESS, payload: {data:userdata}});

    }  catch (err) {
      let errormsg=err.response.data.msg
      dispatch({type: USER_GET_ERROR,payload:{msg:errormsg}});
    }
  };
  






  export let DeleteUser = (id) => async (dispatch) => {
    dispatch({type: USER_GET_LOADING});
    try {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Delete!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          let Userdata = await axios.delete(
            `${Backendurl}/users/${id}`
          );
  
          Swal.fire("Deleted Sucessfully!", "", "success");
        }
      });
  
      dispatch({type: USER_GET_SUCESS });
    } catch (err) {
      dispatch({type: USER_GET_ERROR ,payload:{mag:"Something Wents Wrong"}});
    }
  };


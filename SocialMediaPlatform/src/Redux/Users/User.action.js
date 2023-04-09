
import { Backendurl } from "../../assets/Url";
import { USER_GET_LOADING,USER_GET_SUCESS,USER_GET_ERROR } from "./User.types";

export let AddnewUser = (formdata) => async (dispatch) => {
    dispatch({type: USER_GET_LOADING});
    console.log(formdata);
    try {
      let User = await axios.post(`${Backendurl}/users`, formdata);
      dispatch({type: USER_GET_SUCESS ,payload:User});
    //   Swal.fire("Welcome Back !", "Registration success !", "success");
    } catch (err) {
      dispatch({type: USER_GET_ERROR});
    }
  };
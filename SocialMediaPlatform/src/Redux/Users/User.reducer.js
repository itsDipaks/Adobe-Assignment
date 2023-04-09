import { USER_GET_LOADING,USER_GET_SUCESS,USER_GET_ERROR } from "./User.types";

let initialstate = {
  loading: false,
  error: false,
  msg: null,
  data:[],
};

export const UserReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case USER_GET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_GET_SUCESS: {
      if (payload.data._id) {
        localStorage.setItem("Userid", JSON.stringify(payload.data._id));
      }
      console.log(payload)
      return {
        ...state,
        loading: false,
        data:payload?.data,
        msg:payload?.msg,
      };
    }
    case USER_GET_ERROR: {
      return {
        ...state,
        loading: false,
        isuser: false,
        error: true,
      };
    }
    default:
      return state;
  }
};

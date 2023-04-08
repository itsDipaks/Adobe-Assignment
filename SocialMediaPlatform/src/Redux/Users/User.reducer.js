import { USER_GET_LOADING,USER_GET_SUCESS,USER_GET_ERROR } from "./User.types";

let initialstate = {
  loading: false,
  error: false,
  token: null,
  isadmin: false,
  msg: null,
  name:null,
  email:null
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
      if (payload.data.token) {
        localStorage.setItem("token", JSON.stringify(payload.data.token));
      }
      console.log(payload.data);
      return {
        ...state,
        loading: false,
        token: payload.data.token,
        isadmin: payload.data.isAdmin,
        name: payload.data.userinfo.name,
        email: payload.data.userinfo.email
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

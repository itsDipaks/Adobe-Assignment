import Swal from "sweetalert2";
import { POST_GET_LOADING,POST_GET_SUCESS,POST_GET_ERROR } from "./Post.types";
import { Backendurl } from "../../assets/Url";

import axios from "axios"
export let AddNewPost = (postdata,Userid) => async (dispatch) => {
    dispatch({type: POST_GET_LOADING});
    try {
      let PostAdd = await axios.post(
        `${Backendurl}/posts`,
        {postdata,Userid}
      );
      dispatch({type: POST_GET_SUCESS});
  
      Swal.fire("Sucess!", "Post Added Succesfully !! ", "success");
    } catch (err) {
      dispatch({type: POST_GET_ERROR});
      Swal.fire("Sucess!", "Post Added Succesfully !! ", "success");
    }
  };
  



  export let GetAllPosts= () => async (dispatch) => {
    dispatch({type: POST_GET_LOADING});
  
    try {
      let AllpostData = await axios.get(`${Backendurl}/posts`);
      let Allpost=AllpostData.data.data
      console.log(Allpost)
      dispatch({
        type: POST_GET_SUCESS,
        payload:{Postdata:Allpost}
      });
  
    } catch (err) {
      dispatch({type: POST_GET_ERROR});
    }
  };
  
  export let LikePost= (postid) => async (dispatch) => {
    dispatch({type: POST_GET_LOADING});
  
    try {
      let likes = await axios.put(`${Backendurl}/posts/${postid}/like`);
      dispatch({
        type: POST_GET_SUCESS,
      });
  
    } catch (err) {
      dispatch({type: POST_GET_ERROR});
    }
  };
  

  export let DislikePost= (postid) => async (dispatch) => {
    dispatch({type: POST_GET_LOADING});
  
    try {
      let Unlike = await axios.put(`${Backendurl}/posts/${postid}/unlike`);
      dispatch({
        type: POST_GET_SUCESS,
      });
  
    } catch (err) {
      dispatch({type: POST_GET_ERROR});
    }
  };
  



  export let DeletePost = (id) => async (dispatch) => {
    dispatch({type: POST_GET_LOADING});
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
          let Postdata = await axios.delete(
            `${Backendurl}/posts/${id}`
          );
  
          Swal.fire("Deleted Sucessfully!", "", "success");
        }
      });
  
      dispatch({type: POST_GET_SUCESS });
    } catch (err) {
      dispatch({type: POST_GET_ERROR ,payload:{mag:"Something Wents Wrong"}});
    }
  };
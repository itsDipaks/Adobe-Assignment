import React from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const PrivateRoutes = ({children}) => {
    let id=JSON.parse(localStorage.getItem("Userid"))
    if(id){
        return children
      }else{
        Swal.fire({
            icon: 'error',
            title: 'Access Denied',
            text: ' Please Creat User Then Proceed ',
          })
        return <Navigate to="/adduser"/>
      }

}

export default PrivateRoutes



    
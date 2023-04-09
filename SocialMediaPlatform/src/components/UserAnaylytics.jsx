import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UsersAnyalyetics } from '../Redux/Users/User.action'

const UserAnaylytics = () => {

    let [usercount,setusercount]=useState(0)
    let dispatch=useDispatch()
    useEffect(()=>{
        getusersdata()
    },[])


let {data}=useSelector((store)=>store.user)


    let getusersdata=()=>{
        dispatch(UsersAnyalyetics())
    }
   
  return (
    <div>

<div className="p-4  w-full text-center">
        <div className="border-2 border-gray-200 m-auto w-full py-6 rounded-lg">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-indigo-500 w-full h-14 mb-3 " viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
          </svg>
          <h2 className="title-font font-medium text-3xl text-gray-900">  Users: {data.length}</h2>
          <p className="leading-relaxed">Total</p>
        </div>
      </div>
    </div>
  )
}

export default UserAnaylytics
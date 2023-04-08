import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUser from './Pages/AddUser'
import AddPost from './Pages/AddPost'
import UserList from './Pages/UserList'
import PostList from './Pages/PostList'
import Home from './Pages/Home'

const CombineRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/addpost' element={<AddPost/>}/>
            <Route path='/userlist' element={<UserList/>}/>
            <Route path='/postlist' element={<PostList/>}/>
        </Routes>
    </div>
  )
}

export default CombineRoutes
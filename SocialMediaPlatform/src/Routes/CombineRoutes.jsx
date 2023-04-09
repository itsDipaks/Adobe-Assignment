import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUser from './Pages/AddUser'
import AddPost from './Pages/AddPost'
import UserList from './Pages/UserList'
import PostList from './Pages/PostList'
import Home from './Pages/Home'
import PrivateRoutes from './PrivateRoutes'

const CombineRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/addpost' element={<PrivateRoutes><AddPost/></PrivateRoutes>}/>
            <Route path='/userlist' element={<PrivateRoutes><UserList/></PrivateRoutes>}/>
            <Route path='/postlist' element={<PrivateRoutes><PostList/></PrivateRoutes>}/>
        </Routes>
    </div>
  )
}

export default CombineRoutes
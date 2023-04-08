import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserList from './Pages/UserList'
import PostList from './Pages/PostList'
import CreatePost from './Pages/CreatePost'
import CreateUser from './Pages/CreateUser'

const CombineRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/userlist' element={<UserList/>}/>
            <Route path='/postlist' element={<PostList/>}/>
            <Route path='/createpost' element={<CreatePost/>}/>
            <Route path='/createuser' element={<CreateUser/>}/>
        </Routes>
    </div>
  )
}

export default CombineRoutes
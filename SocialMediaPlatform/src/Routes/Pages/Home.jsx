import React, { useEffect } from 'react'
import Homepost from '../../components/Homepost'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllPosts } from '../../Redux/Posts/Post.action';

const Home = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    getallpost();
  }, []);

  let getallpost = () => {
    dispatch(GetAllPosts());
  };
  let {PostData} = useSelector((store) => store.post);



  return (
    <div>       
        <h2 class="text-gray-500 text-4xl mb-1 font-medium title-font text-center">
  Post
  </h2>
  
{
PostData?.map((el)=>
<Homepost el={el} key={el._id} getallpost={getallpost}/>
)
  
  
  }
  
  
  
  
  </div>
  )
}

export default Home
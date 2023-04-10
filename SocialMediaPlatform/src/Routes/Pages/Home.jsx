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
  let {PostData,loading} = useSelector((store) => store.post);



  return (
    <div>       
        <h2 class="text-gray-500 xs:text-2xl xs:mt-14 text-4xl mb-1 font-medium title-font text-center">
  Post
  </h2>
  
{
PostData?.map((el)=>
<Homepost el={el} key={el._id} loading={loading} getallpost={getallpost}/>
)
  
  
  }
  
  
  
  
  </div>
  )
}

export default Home
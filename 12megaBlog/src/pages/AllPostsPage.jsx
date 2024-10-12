import React,{useState,useEffect,useMemo} from 'react';
import appwriteService from '../appwrite/config';
import { Container,PostCard } from '../components';
import postsSlice from '../store/postsSlice';
import authSlice from '../store/authSlice';
import { fetchPosts } from '../store/postsSlice';
/**
 * The dispatch function is provided by Redux and is used to send (or "dispatch") actions to the Redux store. When you call dispatch(fetchPosts()), you are initiating the fetchPosts action, which in this case is an asynchronous action created with createAsyncThunk.
 * ///////////////////////////////
 * useSelector is a hook provided by React-Redux that allows your React component to access a specific part of the Redux store.
 */
import { useDispatch,useSelector } from 'react-redux';
import '../App.css'
import '../index.css'

function AllPostsPage() {
  const dispatch=useDispatch();
  const {posts,loading,error}=useSelector((state)=>{
    console.log("useSelector",state.posts,state);
    return state.posts;
  })
  // const [posts,setPosts] = useState([]);

  useEffect(()=>{
    console.log("posts.length===0",posts.length,loading,error);

     if(posts.length===0){
      
            dispatch(fetchPosts())
        }
    // useDispatch(fetchPosts());
    // fetchPosts()
    /////////////////////////////////////////
    /////////////////////////////////////////
    /////////////////////////////////////////
    console.log("posts data",posts);
    // appwriteService.getPosts([]).then((posts)=>{
    //   console.log("12postsSlice",postsSlice());
    //   console.log("12postsSlice",authSlice());
    //   console.log("9posts",posts);
    //   if(posts&&posts){
    //     setPosts(posts)
    //   }else return null;
    // })
  },[]);

  // console.log("AllPostsPage",posts&&posts[0]);
  return (loading? <div className='w-full py-8 '>
    <Container>
    <div className="flex flex-wrap pre-flex-item">
      <h1>Loading.....</h1>
    </div>
    </Container>
  </div>
  :<div className='w-full py-8 '>
      <Container>
      <div className="flex flex-wrap pre-flex-item">
        {
          posts.map(post=>{
            console.log(`23post${post}`,post);
            return (
              <div key={post.$id} className='p-2 pre-item'>
                <PostCard post={post}/>
  
              </div>
            )
          })
        }

      </div>
      </Container>
    </div>
  )
}

export default AllPostsPage
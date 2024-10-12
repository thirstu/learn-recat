import React,{useEffect,useState} from 'react';
import appwriteService from '../appwrite/config.js';
import { Container,PostCard } from '../components';
import postsSlice from '../store/postsSlice.js';
import { fetchPosts } from '../store/postsSlice.js';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../App.css'
import '../index.css'
import authService from '../appwrite/auth.js';


function HomePage() {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const {posts,loading,error}=useSelector(state=>state.posts)
    // const [posts,setPosts]=useState([]);
    const guestUserHandler=async()=>{
        const session=await authService.getCurrentUser(navigate);
        console.log("guestUserHandler",session);
        if(session===null){
            navigate("/login")

        }


    }
    useEffect(()=>{
        guestUserHandler();
        // console.log("posts.length===0",posts ,navigate);
        if(posts.length===0){
            dispatch(fetchPosts())
        }
        
        // appwriteService.getPosts().then(posts=>{
        //     if(posts){
        //         console.log("posts.documents",posts[0]);
        //         setPosts(posts)
        //     }
        // })
    },[]);
   
    if(posts.length===0){
        console.log("19HomePage",posts);
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    console.log("34HomePage",posts);

  return (loading?  <div className='w-full py-8 pre-flex-item'>
    <Container>
             <div className="pre-flex-item ">
                <h1>Loading.....</h1>
             </div>
         </Container>
</div>
    :
    <div className='w-full py-8 pre-flex-item'>
           <Container>
                    <div className="pre-flex-item ">
                        {posts.map((post)=>{
                            console.log("ContainerPost: ", post);
                           return (
                                <div className="p-2 pre-item " key={post.$createdAt}>
                                    {/* <PostCard post/> */}
                                    <PostCard post={post}/>
                                </div>
                            )
                        })}
                    </div>
                </Container>
    </div>
  )
}

export default HomePage
import React from 'react';
import appwriteService from "../appwrite/config.js"
import {Link} from 'react-router-dom';
import '../App.css'
import '../index.css'

export default function PostCard(
  posts
) {
  const {$id,title,featuredImg}=posts.post;
  console.log("PostCard-comp",$id,title,featuredImg,{...posts.post});

  return (
    <Link
    to={`/post/${$id}`}
    >
        <div className='pre-post-card bg-red-500-100 rounded-xl p-4'>
            <div className="w-full justify-center mb-2 pre-item">
                <img src={appwriteService.previewFile(featuredImg)} alt={title}
                className='rounded-xl pre-img'
                />
            </div>
            <h2 className='pre-text font-bold text-black'>{title}</h2>

        </div>
    </Link>
  )
}

// export default PostCard
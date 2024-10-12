import React from 'react';
import { PostForm,Container } from '../components';
import '../App.css'
import '../index.css'

function AddPostPage() {
  return (
    <div className='py-8 pre-item'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPostPage
import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post'

export default function MyPosts() {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                <Post message='hi, how are you?' likecount={2}/>
                <Post message='I love water xD' likecount={10}/>
                <Post message='Pamparam' likecount={7}/>
                <Post message='My first post!!!' likecount={5}/>
            </div>
        </div>
    )
}

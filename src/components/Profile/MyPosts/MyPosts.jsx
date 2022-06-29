import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post'

export default function MyPosts(props) {

    let postsElements = props.posts
        .map(p => <Post content={p.content} likeCount={p.likeCount} />)

    return (
        <div className={c.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    )
}

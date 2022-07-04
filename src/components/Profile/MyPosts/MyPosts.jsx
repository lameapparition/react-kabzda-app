import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post content={p.content} likeCount={p.likeCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div className={c.postBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;

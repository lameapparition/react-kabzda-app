import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import {
    addPostCreator,
    updatePostTextCreator
} from '../../../redux/profileReducer'

const MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => <Post content={p.content} likeCount={p.likeCount} />)

    let onAddPostClick = () => {
        props.dispatch(addPostCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updatePostTextCreator(text));
    }

    return (
        <div className={c.postBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                        value={props.newPostText}
                    />
                </div>
                <button onClick={onAddPostClick}>Add post</button>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;

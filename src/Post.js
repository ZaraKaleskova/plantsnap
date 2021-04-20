import React from 'react';
import './Post.css';
import plant from './plant.jpg'
import Avatar from "@material-ui/core/Avatar";

function Post({username, caption, imageUrl}) {
    return (
        <div className="post">
            <div className="postHeader">

            <Avatar 
                className="postAvatar"
                src="/static/images/avatar/jpg"
                alt={username}/>
                <h3>{username}</h3>
            </div>

            <img src={imageUrl} className="postImage"/>

            <h3 className="postText"><strong>{username}</strong>{caption}</h3>
        </div>
    )
}

export default Post;

import React from 'react';
import './Post.css';
import plant from './plant.jpg'
import Avatar from "@material-ui/core/Avatar";

function Post() {
    return (
        <div className="post">
            <div className="postHeader">

            <Avatar 
                className="postAvatar"
                alt='Zara'
                src="static/images/avatar/1.jpg"
            />
            <h2>Username</h2>
            </div>

            <img src={plant} className="postImage"/>

            <h3 className="postText"><strong>PLantQueen34</strong>: Hey look at my new awesome plant</h3>
        </div>
    )
}

export default Post;

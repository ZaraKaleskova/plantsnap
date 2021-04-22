import React, {useState, useEffect} from 'react';
import './Post.css';
import plant from './plant.jpg'
import Avatar from "@material-ui/core/Avatar";
import {db } from './firebase.js';
import firebase from 'firebase';

function Post({ postId, user, username, caption, imageUrl}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    useEffect(() => {
        let unsubscribe;
        if(postId){
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy("timestamp","asc")
            .onSnapshot((snapshot)=>{
                setComments(snapshot.docs.map((doc)=>doc.data()))
            })  
        }
        return () => {
            unsubscribe();
        }
    }, [postId]);
    
    const postComment = (event) =>{
        event.preventDefault();
        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp() 
        });
        setComment('');
    }

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

            <div className = "postComments">
                {
                    comments.map((comment) => (
                        <p>
                            <strong>{comment.username}</strong> {comment.text}
                        </p>
                    ))
                }
            </div>
            {user && (

                <form className = "postCommentsBox">
                    <input 
                        className="postInput"
                        type="text"
                        placeholder="Add a comment.."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button 
                        className="postButton" 
                        disabled={!comment} 
                        type="submit"
                        onClick={postComment} >Post
                    </button>
                    
                </form>
            )}    
        </div>
    )
}

export default Post;

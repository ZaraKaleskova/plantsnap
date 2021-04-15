import React, { useState, useEffect} from 'react';
import { db } from './firebase';
import './App.css';
import Post from './Post';
import logo from './logo.png';


function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);
  
  return (
    <div className="App">
     <div className="appHeader">
      <img 
        className="appHeaderImage"
        alt="header image"
        src={logo}
        />
     </div>
        <h1>Hey there </h1>

        {
          posts.map(post => (
            <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
          ))
        }
    </div>
  );
}

export default App;

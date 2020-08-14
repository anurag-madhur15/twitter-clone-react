import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox'
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect( () => {
        db.collection('posts').onSnapshot(snapShot => (
            setPosts(snapShot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />
            {/* Post */}
            <FlipMove>
                {posts.map(post =>
                    <Post 
                        key={post.username}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                )}
            </FlipMove>
            
            
        </div>
    )
}

export default Feed

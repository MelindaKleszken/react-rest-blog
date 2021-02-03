//import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
//import ShowPost from './components/Post';

function App() {
  //const [usersList, setUsersList] = useState("");
  const [posts, setPosts] = useState('');
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchPosts()
  });

  // Create async function for fetching posts list
  const fetchPosts = async () => {
    const res = await fetch('http://localhost:5000/posts/')
    const data = res.json() // Process the incoming data
        // Updatestate
        
        setPosts(data);
        setLoaded(true);
  };

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={fetchPosts}>Fetch posts</button>

        <p>Posts</p> 
        <ShowPost isLoaded={isLoaded} content={posts}/>
      </header>
    </div>
    );

 
};

const ShowPost = (props) => {
  if (props.isLoaded) {
    console.log('loading')
  return (
    <div className="newPost">
      {props.content.map((post, index) => {
        return (
          <div className="singlePost" key={index}>
            <p>{post.content}</p>
            <p>{post.CreatedAt}</p>
          </div>
        )
      })};
    </div>
  )} else {
    return (
      <h1>waiting...</h1>
    )
  }

};

export default App;

//import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import ShowPost from './components//post/function';

function App() {
  //const [usersList, setUsersList] = useState("");
  const [posts, setPosts] = useState('');
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, []);

  // Create async function for fetching posts list
  const fetchPosts = async () => {
    const res = await fetch('http://localhost:5000/posts/')
    const data = await res.json() // Process the incoming data
        // Updatestate
        setPosts(data);
        setLoaded(true);
  };

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={fetchPosts}>Fetch posts</button>

        <p>React Blog</p> 
        <ShowPost isLoaded={isLoaded} content={posts}/>
      </header>
    </div>
    );

 
};


export default App;

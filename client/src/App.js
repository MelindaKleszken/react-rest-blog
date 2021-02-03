//import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect } from 'react';
import ShowPost from './components/post/function';
import {postModel} from './components/post/postModel'
//import ShowUser from './components/user/function';

function App() {
  //const [usersList, setUsersList] = useState("");
  const [posts, setPosts] = useState('');
  const [isLoaded, setLoaded] = useState(false)
  const [users, setUsers] = useState('');
  //const [logged, setLogged] = useState('');

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

  //fetch all user names
  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users/')
    const data = await res.json()
      setUsers(data);  
      setLoaded(true); 
  };

  //add new post
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/users",
      {
      method: 'POST',
      headers: 'application/json',
      body: JSON.stringify(postModel)
      });
    const data = await response.json();
    console.log(data);
    };

  return (
    <div className="App">
      <header className="App-header">

        <button onClick={(fetchPosts, fetchUsers)}>Fetch posts</button>

        <p>React Blog</p> 
        <ShowPost isLoaded={isLoaded} content={posts}/>
        {/*<ShowUser isLoaded={isLoaded} content={users}/>*/ }
      </header>
    </div>
    );

 
};


export default App;

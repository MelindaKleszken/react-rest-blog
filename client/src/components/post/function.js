import React from 'react';
import './style.css'

const ShowPost = (props) => {
  if (props.isLoaded) {
    //check if loading
    console.log('loading')

  return (
    <div className="newPost">
      {props.content.map((post, index) => {
        return (
          //create the layout for each post
          <div className="singlePost" key={index}>
            <p>"{post.content}"</p>
            <p className="postDate">Added at: {post.createdAt}</p>
          </div>
        )
      })}
    </div>
  )} else {
    return (
      <h1>waiting...</h1>
    )
  }

};

  export default ShowPost;
import React from 'react';
import './style.css';


const ShowPost = (props) => {
  if (props.isLoaded) {
    //check if loading
    console.log('loading')

    return (
      <div className="newPost">
      {props.content.map((post, index) => {

        //edit date and time format
        let preDate = post.createdAt.split("");
        let year = preDate.slice(0,10).join('').concat();
        let hour = preDate.slice(11,19).join('').concat();
        let cleanDate = year+", "+hour;

        return (
          //create the layout for each post
          <div className="singlePost" key={index}>
            <p>"{post.content}"</p>
            <p className="postDetails">Posted on: {cleanDate}, by {post.author}.</p>
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
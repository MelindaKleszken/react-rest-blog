import React from 'react';

const ShowPost = (props) => {
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
    )
  };
  

  export default ShowPost;
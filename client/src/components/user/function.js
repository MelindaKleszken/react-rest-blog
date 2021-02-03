import React from 'react';
import './style.css';

const ShowUser = (props) => {
    if (props.isLoaded) {
    return(
        <div>
            {props.name.map((user, index) => {
                return(
                    <div key={index}>
                        <p>{user.name}</p>
                    </div>
                )
            })}
            <p>

            </p>
        </div>
    )} else {
        return (
          <h1>waiting...</h1>
        )
      }
};

export default ShowUser;
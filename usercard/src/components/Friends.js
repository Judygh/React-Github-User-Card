import React from "react";

const Friends = ({friends}) =>{

    return (
        <div className="friends-wrapper">
            
            <h1> {friends.login}</h1>
    <img src={friends.avatar_url} alt="Profile Image" className="friends-image"/>
  <button className="repo-button"><a href={friends.html_url} alt="Profile Repos">Profile</a></button>
        </div>
    )
}
export default Friends;
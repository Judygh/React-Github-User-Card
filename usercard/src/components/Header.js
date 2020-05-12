import React from "react";

const Header = ({onChange, update, input}) =>{
    return(
        <>
        <input className="input" type="text" placeholder="Search User" value={input} onChange={onChange}/>
        <button className="inputButton" type="submit" onClick={update}>Find Follower</button>
        </>
    )
}
export default Header;
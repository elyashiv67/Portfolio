import React from 'react';
import {NavLink} from "react-router";

function Home() {
    return (
        <div>
            <h1>hello there</h1>
            <div style={{display:'flex',gap:'10px'}}>
            <NavLink to={"/aboutMe"}>about me</NavLink>
            <NavLink to={"/images"}>images</NavLink>
            <NavLink to={"/links"}>links</NavLink>
            </div>
        </div>
    );
}

export default Home;
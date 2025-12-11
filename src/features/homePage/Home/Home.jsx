import React from 'react';
import { NavLink } from "react-router";
import './Home.modules.css';

function Home() {
    return (
        <div className="home-container">
            <h1 className="hero-title animate-slide-up">
                <span className="gradient-text">Hello There</span>
            </h1>
            <p className="hero-subtitle animate-slide-up delay-1">
                Welcome to my digital space.
            </p>
            <div className="animate-slide-up delay-2">
                <NavLink to="/aboutMe" className="btn">Explore Work</NavLink>
            </div>
        </div>
    );
}

export default Home;
import React from 'react';
import './aboutMe.modules.css'
import { HomeRounded, SegmentRounded, } from '@mui/icons-material';
import LanguageHolder from "./languageHolder/LanguageHolder.jsx";


function AboutMe() {
    return (
        <div className="about-container">
            <div className="about-card">
                <h1 className="about-title gradient-text">Elyashiv Swisa</h1>
                <div className="about-content">
                    <p><HomeRounded className="icon" fontSize="medium" /> I live in Menahamia. I have a diploma in Practical Industrial Management.</p>
                    <p><SegmentRounded className="icon" fontSize="medium" /> My hobbies are sport, coding, and music.</p>
                </div>
                <div className={"about-card"}>
                    <div className={"about-content"}>
                        <LanguageHolder/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
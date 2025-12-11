import React from 'react';
import './aboutMe.modules.css'
import {HomeRounded,SegmentRounded,} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";

function AboutMe() {
    const navigate = useNavigate();
    return (
        <div className={"aboutMe"}>
            <h1>Elyashiv swisa</h1>
            <p><HomeRounded className={"Home"} fontSize="small"/> i live in menahamia i have diploma in practical industrial managment</p>
            <p> <SegmentRounded className={"Segment"}/> my hobbyes are sport coding music</p>
            <button onClick={()=>navigate("/")}>go back</button>
        </div>
    );
}

export default AboutMe;
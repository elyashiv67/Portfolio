import React from 'react';
import {useNavigate} from "react-router-dom";

function Links() {
    const navigate = useNavigate();
    return (
        <div>
            <a href={"https://github.com/elyashiv67"} target={"_blank"}>git hub</a>
            <br/>
            <button onClick={()=>navigate("/")}>go back</button>
        </div>
    );
}

export default Links;
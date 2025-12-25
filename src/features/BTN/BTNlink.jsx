import React from 'react';
import {NavLink} from "react-router";

function BtnLink({path,innerText}) {
    return (
        <div>
            <NavLink className={"btn"} to={path}>{innerText}</NavLink>
        </div>
    );
}

export default BtnLink;
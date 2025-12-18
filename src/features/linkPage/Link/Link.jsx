import React from 'react';
import {ArrowOutward} from "@mui/icons-material";

function Link({name,path , iconColor , iconComponent}) {
    return (
        <div className="link-card" onClick={() => window.open(path, "_blank")}>
            {iconComponent}
            <span>{name}</span>
            <ArrowOutward style={{color: iconColor}} className="link-icon" />
        </div>
    );
}

export default Link;
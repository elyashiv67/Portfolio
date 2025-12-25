import React from 'react';
import './Language.css';

function Language({name,icon}) {
    return (
        <div className="language-card">
            <p style={{cursor:"default"}}>{icon}{name}</p>
        </div>
    );
}

export default Language;
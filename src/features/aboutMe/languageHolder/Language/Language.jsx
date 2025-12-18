import React from 'react';
import './Language.css';

function Language({name,icon}) {
    return (
        <div className="language-card">
            <p>{icon}{name}</p>
        </div>
    );
}

export default Language;
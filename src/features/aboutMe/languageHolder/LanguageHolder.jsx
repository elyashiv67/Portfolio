import React from 'react';
import Language from "./Language/Language.jsx";
import './LanguageHolder.css';
import {Icons} from "./Icons.jsx";


function LanguageHolder() {
    return (
        <div className={"language-holder"}>
            <Language name={"Css"} icon={<Icons.Css/>}/>
            <Language name={"Html"} icon={<Icons.Html/>}/>
            <Language name={"Javascript"} icon={<Icons.Javascript/>}/>
            <Language name={"React"} icon={<Icons.React/>}/>
            <Language name={"Arduino"} icon={<Icons.Arduino/>}/>
        </div>
    );
}

export default LanguageHolder;
// Image.js
import React from "react";
import './App.css';

export default function Image(props) {
    let { url, alttext, action, information} = props;
    return (
        <div>
            <img src={url} alt={alttext} width="100%" height="auto" onClick={action}/>
            <div className="informative-text">
                {information}
            </div>
        </div>
    );
  }
  
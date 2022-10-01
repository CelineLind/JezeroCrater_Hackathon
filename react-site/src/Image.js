// Image.js
import React from "react";
import './App.css';

export default function Image(props) {
    let { url, alttext, action, information} = props;
    return (
        <div onClick={action}>
            <img src={url} alt={alttext} width="100%" height="auto"/>
            <div className="informative-text">
                {information}
            </div>
        </div>
    );
  }
  
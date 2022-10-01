// Image.js
import React from "react";

export default function Image(props) {
    let { url, alttext, action} = props;
    return (
        <img src={url} alt={alttext} width="100%" height="auto" onClick={action}/>
    );
  }
  
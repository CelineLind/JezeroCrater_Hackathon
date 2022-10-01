// Image.js
import React from "react";

export default function Image(props) {
    let { url, alttext } = props;
    return (
        <img src={url} alt={alttext} width="100%" height="auto"/>
    );
  }
  
// Image.js
import React from "react";

export default function Image(props) {
    let { url, text } = props;
    return (
      <div style={{ backgroundImage:`url(${url})`, height:200 }}>
        {text}
      </div>
    );
  }
  
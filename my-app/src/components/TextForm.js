import React, { useState } from "react";

export default function TextForm(props) {
 
  const [text, setText] = useState("Enter text here"); //we have set text var whose value is 'Enter ext here'
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="my-box"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} Words present,  {text.length}  character present, {0.008 * text.split(" ").length} Minutes to read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

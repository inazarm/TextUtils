import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.info("Button clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE", "success");
  };
  const handleLoClick = () => {
    // console.info("Button clicked")
    let newText = text.toLowerCase();
    props.showAlert("Converted to lowerCase", "success");
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.info("Button clicked")
    setText(event.target.value);
  };
  const handleClearClick = (event) => {
    let newText = "";
    setText(newText);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to UPERCASE
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here..."}
        </p>
      </div>
    </>
  );
}

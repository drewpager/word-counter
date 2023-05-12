import React, { useState } from 'react';
// import './wordCounter.css';
import './wordCounter.scss';

export const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setsentenceCount] = useState(0);
  // Removing "px/rem/em" for now
  // const [active, setActive] = useState("px");

  const handleChange = (e) => {
    e.preventDefault();
    let length = e.target.value
    let words = length.split(' ');
    let sentences = length.split(/[.!?]/g);
    setCharCount(length.length);
    setWordCount(words.length);
    setsentenceCount(sentences.length - 1);
  }

  const handleReset = () => {
    setWordCount(0);
    setCharCount(0);
    setsentenceCount(0);
  }

  // const handleMetric = (value) => {
  //   setActive(value);
  //   console.log(active)
  // }

  return (
    <div className="container">
      <h1 className="heading-text">Blog Text Readability Checker</h1>
      <button className="reset-button" onClick={handleReset}>↻ Reset</button>
      {/* <div className="button--div"> */}
        {/* <div className="metric--selectors">
          <button className={active === "px" ? "px active" : "px"} onClick={() => setActive("px")}>px</button>
          <button className={active === "rem" ? "px active" : "px"} onClick={() => setActive("rem")}>rem</button>
          <button className={active === "em" ? "px active" : "px"} onClick={() => setActive("em")}>em</button>
        </div> */}
      {/* </div> */}
      <div className="text--modifiers">
        <p>Google Fonts</p>
        <p>Text Size</p>
        <p>Line Height</p>
        <p>Text Color</p>
        <p>Background Color</p>
      </div>
      <div className="input--area">
        <textarea className="text-area" onChange={(e) => handleChange(e)}/>
      </div>
      <div className="output--area">
        <div className="readability--scores">
          <h3>Details</h3>
          <h5>Words: {wordCount}</h5>
          <h5>Characters: {charCount}</h5>
          <h5>Sentences: {sentenceCount}</h5>
        </div>
      </div>
    </div>
  )
}
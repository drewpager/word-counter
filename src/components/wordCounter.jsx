import React, { useState } from 'react';
import './wordCounter.css';

export const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setsentenceCount] = useState(0);
  const [active, setActive] = useState("px");

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
  }

  // const handleMetric = (value) => {
  //   setActive(value);
  //   console.log(active)
  // }

  return (
    <div>
      <h1 className="heading-text">Blog Text Readability Checker</h1>
      <div className="button--div">
        <div className="metric--selectors">
          <button className={active === "px" ? "px active" : "px"} onClick={() => setActive("px")}>px</button>
          <button className={active === "rem" ? "px active" : "px"} onClick={() => setActive("rem")}>rem</button>
          <button className={active === "em" ? "px active" : "px"} onClick={() => setActive("em")}>em</button>
        </div>
        <button className="reset-button" onClick={handleReset}>↻ Reset</button>
      </div>
      <div className="text--modifiers">
        <p>Google Fonts</p>
        <p>Text Size</p>
        <p>Line Height</p>
        <p>Text Color</p>
        <p>Background Color</p>
      </div>
      <h3>Words: {wordCount}</h3>
      <h3>Characters: {charCount}</h3>
      <h3>Sentences: {sentenceCount}</h3>
      <div className="text--area">
        <input type="text" className="text-area" onChange={(e) => handleChange(e)}/>
      </div>
      <div className="results--sidebar">

      </div>
    </div>
  )
}
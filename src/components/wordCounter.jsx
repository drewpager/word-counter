import React, { useState } from 'react';
import './wordCounter.css';

export const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    let length = e.target.value
    setCharCount(length.length);
  }
  return (
    <div>
      <h2>Blog Text Readability Checker</h2>
      <button className="reset-button">↻ Reset</button>
      <div className="text--modifiers">
        <p>Google Fonts</p>
        <p>Text Size</p>
        <p>Line Height</p>
        <p>Text Color</p>
        <p>Background Color</p>
      </div>
      <h3>Count: {wordCount}</h3>
      <h3>Characters: {charCount}</h3>
      <div className="text--area">
        <input type="text" className="text-area" onChange={(e) => handleChange(e)}/>
      </div>
      <div className="results--sidebar">

      </div>
    </div>
  )
}
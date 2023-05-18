import React, { useState } from 'react';
// import './wordCounter.css';
import './wordCounter.scss';

export const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setsentenceCount] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(24);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [fontColor, setFontColor] = useState("#000000");
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
    setFontSize(16);
    setLineHeight(24);
    setBackgroundColor("#ffffff");
    setFontColor("#000000");
  }

  // const handleMetric = (value) => {
  //   setActive(value);
  //   console.log(active)
  // }

  return (
    <div className="container">
      <h1 className="heading-text">Blog Text Readability Checker</h1>
      <button className="reset-button" onClick={handleReset}>↻ Reset</button>
      <div className="text--modifiers">
        <div>
          <p>Google Fonts</p>
          <select width="100%">
            <option value="arial">Arial</option>
          </select>
        </div>
        <div>
          <p>Text Size</p>
          <input 
            type="number" 
            min="10" 
            max="100" 
            defaultValue={fontSize}
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)} 
          />
        </div>
        <div>
          <p>Line Height</p>
          <input 
            type="number" 
            min="10" 
            max="100" 
            defaultValue={lineHeight}
            value={lineHeight}
            onChange={(e) => setLineHeight(e.target.value)} 
            />
        </div>
        <div>
          <p>Text Color</p>
          <input 
            type="color" 
            defaultValue={fontColor} 
            value={fontColor}
            onChange={(e) => setFontColor(e.target.value)}
          />
        </div>
        <div>
          <p>Background Color</p>
          <input 
            type="color" 
            defaultValue={backgroundColor} 
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </div>
      </div>
      <div className="input--area">
        <textarea 
          style={{ 
            fontSize: `${fontSize}px`, 
            lineHeight: `${lineHeight}px`,
            backgroundColor: `${backgroundColor}`,
            color: `${fontColor}`
          }} 
          className="text-area" 
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="output--area">
        <div className="readability--scores">
          <h3>Readability Scores</h3>
          <div><h5>Text Size</h5><h4>Good</h4></div>
          <div><h5>Line Height</h5><h4>Good</h4></div>
          <div><h5>Contrast</h5><h4>Poor</h4></div>
          <div><h5>Blog Width</h5><h4>Bad</h4></div>
        </div>
        <div className="readability--scores">
          <h3>Details</h3>
          <div><h5>Words</h5><h4>{wordCount}</h4></div>
          <div><h5>Characters</h5><h4>{charCount}</h4></div>
          <div><h5>Sentences</h5><h4>{sentenceCount}</h4></div>
          <div><h5>Paragraphs</h5><h4>{sentenceCount}</h4></div>
          <div><h5>Read time</h5><h4>{sentenceCount}</h4></div>
          <div><h5>Sentences</h5><h4>{sentenceCount}</h4></div>
        </div>
      </div>
    </div>
  )
}
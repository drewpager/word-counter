import React, { useState } from 'react';
// import './wordCounter.css';
import './wordCounter.scss';

export const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setsentenceCount] = useState(0);
  const [paragraphCount, setparagraphCount] = useState(0);
  const [readTime, setReadTime] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(24);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [fontColor, setFontColor] = useState("#000000");
  const [blogWidth, setBlogWidth] = useState(890);
  // Removing "px/rem/em" for now
  // const [active, setActive] = useState("px");

  const WORDS_PER_MINUTE = 238;

  const handleChange = (e) => {
    e.preventDefault();
    let length = e.target.value
    let words = length.split(' ');
    let sentences = length.split(/[.!?]/g);
    let paragraphs = length.split(/\n\n/g);
    let readTime = Math.ceil(words.length / WORDS_PER_MINUTE);

    setCharCount(length.length);
    setWordCount(words.length);
    setsentenceCount(sentences.length - 1);
    setparagraphCount(paragraphs.length);
    setReadTime(readTime);
  }

  const handleReset = () => {
    setFontSize(16);
    setLineHeight(24);
    setBackgroundColor("#ffffff");
    setFontColor("#000000");
    setBlogWidth(890);
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
            className='fontSize--input'
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
            className='lineHeight--input'
            />
        </div>
        <div>
          <p>Text Color</p>
          <div className="fontColor--input">
            <input 
              type="text" 
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)} 
              id="background" 
              className='textColor--input'
            />
            <input 
              type="color" 
              className='color-picker'
              defaultValue={fontColor} 
              value={fontColor}
              onChange={(e) => setFontColor(e.target.value)}
              tabIndex={-1}
              id="backgroundColorPicker"
            />
          </div>
        </div>
        <div>
          <p>Background Color</p>
          <div className="fontColor--input">
            <input 
              type="text" 
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
              id="background" 
              className='textColor--input'
            />
          <input 
            type="color" 
            className='color-picker'
            defaultValue={backgroundColor} 
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            tabIndex={-1}
            id="backgroundColorPicker"
          />
          </div>
        </div>
      </div>
      <div className='blogWidth--section'>
        <div className="blogWidth--title">
          <h5>Blog Width</h5>
        </div>
        <input
          type="number"
          min="100"
          max="890"
          value={blogWidth}
          onChange={e => setBlogWidth(e.target.value)}
          className='blogWidth--input'
        />
        <br />
        <input 
          type="range" 
          min="100" 
          max="890"
          value={blogWidth} 
          onChange={e => setBlogWidth(e.target.value)}
          className='blogWidth--slider' 
        />
      </div>
      <div className="input--area" style={{ backgroundColor: `${backgroundColor}` }}>
        <textarea 
          style={{ 
            fontSize: `${fontSize}px`, 
            lineHeight: `${lineHeight}px`,
            backgroundColor: `${backgroundColor}`,
            color: `${fontColor}`,
            width: `${blogWidth}px`
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
          <div><h5>Avg. Characters per line</h5><h4>{charCount}</h4></div>
          <div><h5>Sentences</h5><h4>{sentenceCount}</h4></div>
          <div><h5>Paragraphs</h5><h4>{paragraphCount}</h4></div>
          <div><h5>Read time</h5><h4>{readTime} {readTime < 2 ? "Minute" : "Minutes"}</h4></div>
        </div>
      </div>
    </div>
  )
}
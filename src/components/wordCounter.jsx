import React, { useState } from 'react';
// import './wordCounter.css';
import './wordCounter.scss';
import GoogleFontLoader from 'react-google-font-loader';

export const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [sentenceCount, setsentenceCount] = useState(0);
  const [paragraphCount, setparagraphCount] = useState(0);
  const [readTime, setReadTime] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [textFont, setTextFont] = useState("Arial");
  const [lineHeight, setLineHeight] = useState(22);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [fontColor, setFontColor] = useState("#000000");
  const [blogWidth, setBlogWidth] = useState(890);
  const [textSizeScore, setTextSizeScore] = useState("Good");
  const [lineHeightScore, setLineHeightScore] = useState("Good");
  const [blogWidthScore, setBlogWidthScore] = useState("Good");
  // Removing "px/rem/em" for now
  // const [active, setActive] = useState("px");

  const WORDS_PER_MINUTE = 238;


  const fonts = [
    {
      font: 'Roboto',
      weights: [400],
    },
    {
      font: 'Roboto Mono',
      // weights: [400],
    },
    {
      font: 'Arial',
      // weights: [400],
    },
    {
      font: 'Montserrat',
      // weights: [400],
    }
  ];

  const handleChange = (e) => {
    e.preventDefault();
    let length = e.target.value
    let words = length.split(' ');
    let sentences = length.split(/[.!?]/g);
    let paragraphs = length.split(/\n\n/g);
    let readTime = Math.ceil(words.length / WORDS_PER_MINUTE);

    setCharCount(length.length);
    setWordCount(words.length - 1);
    setsentenceCount(sentences.length - 1);
    setparagraphCount(paragraphs.length);
    setReadTime(readTime);
  }

  const handleReset = () => {
    setFontSize(16);
    setLineHeight(22);
    setBackgroundColor("#ffffff");
    setFontColor("#000000");
    setBlogWidth(890);
    setTextFont("Arial");
  }

  const handleTextSizeScore = (value) => {
    if (value < 16) {
      setTextSizeScore("Poor")
    }
    else if (value >= 16 && value <= 18) {
      setTextSizeScore("Good")
    }
    else if (value >= 19) {
      setTextSizeScore("Great")
    }
  }

  const handleLineHeight = (fontSize, lineHeight) => {
    let lineHeightValue = lineHeight / fontSize;
    
    if (lineHeightValue < 1.3) {
      setLineHeightScore("Poor")
    }

    if (lineHeightValue >= 1.3 && lineHeightValue <= 1.4) {
      setLineHeightScore("Great")
    }

    if (lineHeightValue >= 1.5 && lineHeightValue <= 1.6) {
      setLineHeightScore("Good")
    }

    if (lineHeightValue >= 1.7) {
      setLineHeightScore("Poor")
    }
  }

  const handleBlogWidthScore = (blogWidth) => {
    if (blogWidth < 400) {
      setBlogWidthScore("Poor")
    }

    if (blogWidth >= 401 && blogWidth <= 500) {
      setBlogWidthScore("Great")
    }

    if (blogWidth >= 501 && blogWidth <= 600) {
      setBlogWidthScore("Good")
    }

    if (blogWidth >= 601) {
      setBlogWidthScore("Poor")
    }
  }

  return (
    <div className="container">
      <h1 className="heading-text">Blog Text Readability Checker</h1>
      <button className="reset-button" onClick={handleReset}>↻ Reset</button>
      <div className="text--modifiers">
        <div>
          <p>Google Fonts</p>
          <select className="fonts--input" onChange={(e) => setTextFont(e.target.value)}>
            {fonts.map((font, index) => (
              <option 
                value={font.font}
                key={index}
            >{font.font}</option>
            ))}
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
            onChange={(e) => { setFontSize(e.target.value); handleTextSizeScore(e.target.value) }} 
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
            onChange={(e) => { setLineHeight(e.target.value); handleLineHeight(fontSize, e.target.value) }} 
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
          onChange={e => { setBlogWidth(e.target.value); handleBlogWidthScore(e.target.value) }}
          className='blogWidth--input'
        />
        <br />
        <input 
          type="range" 
          min="100" 
          max="890"
          value={blogWidth} 
          onChange={e => { setBlogWidth(e.target.value); handleBlogWidthScore(e.target.value) }}
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
            width: `${blogWidth}px`,
            fontFamily: `${textFont}`
          }} 
          className="text-area" 
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="output--area">
        <div className="readability--scores">
          <h3>Readability Scores</h3>
          <div><h5>Text Size</h5><h4 color="green">{textSizeScore}</h4></div>
          <div><h5>Line Height</h5><h4>{lineHeightScore}</h4></div>
          {/* <div><h5>Contrast</h5><h4>Poor</h4></div> */}
          <div><h5>Blog Width</h5><h4>{blogWidthScore}</h4></div>
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
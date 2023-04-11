import React, { useState } from 'react';

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
      <h2>Word Counter</h2>
      <h3>Count: {wordCount}</h3>
      <h3>Characters: {charCount}</h3>
      <div>
        <input type="text" className="text-area" onChange={(e) => handleChange(e)}/>
      </div>
    </div>
  )
}
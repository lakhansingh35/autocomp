import React, { useState } from 'react'

const correction = {
  'aakhan': 'lakhan',
  'susu': 'sushant',
}
function TextArea() {
  const [data, setData] = useState('')
  function handleChange(event) {
    const inputValue = event.target.value
    setData(inputValue);
  }
  function handleKeyDown(event) {
    if (event.key === ' ') {
      const words = data.split(" ");
      const lastWord = words[words.length - 1];
      if (correction[lastWord]) {
        words[words.length - 1] = correction[lastWord];
        setData(words.join(' ') + ' ')
        event.preventDefault();
      }
    }
  }
  return (
    <>
      <div>TextArea<br />
        <label htmlFor="textArea">Enter Text</label><br />
        <textarea value={data} rows="10" cols="50" onChange={handleChange} onKeyDown={handleKeyDown} />
      </div>
    </>
  )
}
export default TextArea
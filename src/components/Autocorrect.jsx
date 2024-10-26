import React, { useState } from 'react'

const correction = {
  'maine': 'main',
  'senter': 'center',
  'camputer': 'computer'
}
function Autocorrect() {
  const [data, setData] = useState('');

  function handleChange(e) {
    const inputValue = e.target.value;
    setData(inputValue)
    // console.log(inputValue)
  }
  function handleKeyDown(e) {
    if (e.key === ' ') {
      const words = data.split(' ');
      const lastWord = words[words.length - 1]
      if (correction[lastWord]) {
        words[words.length - 1] = correction[lastWord]
        // console.log(words)
        setData(words.join(' ') + ' ')
        e.preventDefault();

        // console.log(lastWord)
      }
      // console.log(lastWord)
    }
  }

  return (
    <>
      <div>Autocorrect</div>
      <textarea name="textarea" value={data} rows="10" cols="60" onChange={handleChange} onKeyDown={handleKeyDown}></textarea>
    </>
  )
}

export default Autocorrect
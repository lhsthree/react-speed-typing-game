import React, { useState, useEffect } from "react"

function App() {
  const STARTING_TIME = 5

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(e){
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text){
    const wordsArr = text.trim().split(' ')
    const filteredWords = wordsArr.filter(word => word !== "")
    return filteredWords.length
  }

  function startGame(){
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
  }

  function endGame() {
      setIsTimeRunning(false)
      const numWords = calculateWordCount(text)
      setWordCount(numWords)
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0){
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }  else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])


  console.log(text)
    return (
      <div>
        <h1>Speed Typing Game</h1>
        <textarea 
          disabled={!isTimeRunning}
          onChange={handleChange}
          value={text} />
        <h4>Time reamaing: {timeRemaining}</h4>
        <button disabled={isTimeRunning} onClick={startGame}>Press to Start</button>
        <h1>Word Count: {wordCount} </h1>
      </div>
    )
}

export default App
import React from "react"
import useWordGame from "./hooks/wordGame"

function App() {
  const {inputRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame, 
        endGame, 
        wordCount
      } = useWordGame(15)
  

    return (
      <div>
        <h1>Speed Typing Game</h1>
        <textarea 
          ref={inputRef}
          disabled={!isTimeRunning}
          onChange={handleChange}
          value={text} 
        />
        <h4>Time reamaing: {timeRemaining}</h4>
        <button 
          disabled={isTimeRunning} 
          onClick={startGame}
          >Press to Start
        </button>
        <h1>Word Count: {wordCount} </h1>
      </div>
    )
}

export default App
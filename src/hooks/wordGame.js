import {useState, useEffect, useRef} from "react"

function useWordGame(){
    const STARTING_TIME = 5

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const inputRef = useRef(null)

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
    inputRef.current.disabled = false
    inputRef.current.focus()
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

  return {inputRef, handleChange, text, isTimeRunning, timeRemaining, startGame, endGame, wordCount}
}



export default useWordGame

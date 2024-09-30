import React, { createContext, useState, useCallback, useEffect } from 'react'

const TimerStateContext = createContext()
const TimerActionsContext = createContext()

const TimerProvider = ({ children }) => {
  const initialTime = 150
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const [isActive, setIsActive] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const startTimer = useCallback(() => {
    setIsActive(true)
  }, [])

  const resetTimer = useCallback(() => {
    setIsActive(false)
    setTimeLeft(initialTime)
  }, [initialTime])

  useEffect(() => {
    if (!isActive || gameOver) return

    const timerId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 1) {
          clearInterval(timerId)
          setIsActive(false)
          return 0
        }
        return prevTimeLeft - 1
      })
    }, 1000)

    return () => clearInterval(timerId)
  }, [isActive, gameOver])

  return (
    <TimerStateContext.Provider value={{ timeLeft, gameOver }}>
      <TimerActionsContext.Provider
        value={{ startTimer, resetTimer, setGameOver }}
      >
        {children}
      </TimerActionsContext.Provider>
    </TimerStateContext.Provider>
  )
}

export { TimerProvider, TimerStateContext, TimerActionsContext }

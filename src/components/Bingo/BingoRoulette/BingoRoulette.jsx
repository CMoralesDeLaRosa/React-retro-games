import './BingoRoulette.css'
import React, { useState, useContext } from 'react'
import {
  TimerStateContext,
  TimerActionsContext
} from '../../../context/TimerProvider'
import Button from '../../Button/Button'
const BingoRoulette = ({ currentNumber, onNext, gameOver }) => {
  const [isActive, setIsActive] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const { timeLeft } = useContext(TimerStateContext)
  const { startTimer } = useContext(TimerActionsContext)

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  const handleClick = () => {
    if (!gameOver && !buttonDisabled) {
      setIsActive(true)
      setButtonDisabled(true)
      onNext()
      startTimer()

      setTimeout(() => {
        setIsActive(false)
        setButtonDisabled(false)
      }, 1500)
    }
  }

  return (
    <article className='article-bingo-roulette flex-container'>
      <div className={`div-bingo-circle ${isActive ? 'active' : ''}`}>
        <div className='current-number'>
          {currentNumber !== null ? currentNumber : '?'}
        </div>
      </div>
      <div className='div-roulette-buttons flex-container'>
        <Button
          buttonTitle='Siguiente'
          className='button-bingo'
          onClick={handleClick}
          disabled={gameOver || buttonDisabled}
        />
        <div className='div-countDown-timer flex-container'>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    </article>
  )
}

export default BingoRoulette

import './Bingo.css'
import React, { useCallback, useEffect, useContext } from 'react'
import { handleResetBingo } from '../../utils/handleResetBingo'
import { selectRandomNumber } from '../../utils/selectRandomNumbers'
import BingoPlayer from '../../components/Bingo/BingoPlayer/BingoPlayer'
import BingoGameStatus from '../../components/Bingo/BingoGameStatus/BingoGameStatus'
import BingoRoulette from '../../components/Bingo/BingoRoulette/BingoRoulette'
import {
  TimerStateContext,
  TimerActionsContext
} from '../../context/TimerProvider'
import useBingoReducer from '../../hooks/useBingoReducer'

const Bingo = () => {
  const numbers = React.useMemo(
    () => Array.from({ length: 100 }, (_, i) => i + 1),
    []
  )

  const { timeLeft } = useContext(TimerStateContext)

  const { resetTimer, setGameOver: setGameOverContext } =
    useContext(TimerActionsContext)

  const {
    state,
    selectNumber,
    resetGame,
    setGameOver,
    setCurrentNumber,
    setWinningNumbers
  } = useBingoReducer()

  const { numSelected, currentNumber, winningNumbers, gameOver } = state

  const handleNext = useCallback(() => {
    if (!timeLeft) return

    selectRandomNumber(
      numbers,
      numSelected,
      (newNumSelected, newCurrentNumber) => {
        selectNumber(newNumSelected, newCurrentNumber)
      }
    )
  }, [numbers, numSelected, timeLeft, selectNumber])

  const handleReset = useCallback(() => {
    handleResetBingo(
      () => resetGame(),
      (number) => setCurrentNumber(number),
      (newWinningNumbers) => {
        console.log('Resetting winning numbers:', newWinningNumbers)
        setWinningNumbers(newWinningNumbers)
      },
      setGameOverContext,
      resetTimer
    )
  }, [
    resetGame,
    setCurrentNumber,
    setWinningNumbers,
    setGameOverContext,
    resetTimer
  ])

  useEffect(() => {
    if (timeLeft === 0 && winningNumbers.size < 15 && !gameOver) {
      setGameOver()
      setGameOverContext(true)
    }
  }, [timeLeft, winningNumbers.size, gameOver, setGameOver, setGameOverContext])

  return (
    <section id='section-bingo' className='flex-container'>
      <BingoRoulette
        currentNumber={currentNumber}
        onNext={handleNext}
        gameOver={gameOver}
      />
      <BingoPlayer
        numSelected={numSelected}
        currentNumber={currentNumber}
        winningNumbers={winningNumbers}
        setWinningNumbers={setWinningNumbers}
      />
      <BingoGameStatus
        winningNumbers={Array.from(winningNumbers)}
        timeLeft={timeLeft}
        onReset={handleReset}
      />
    </section>
  )
}

export default Bingo

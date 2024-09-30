import './BingoGameStatus.css'
import Button from '../../Button/Button'
const BingoGameStatus = ({ winningNumbers, timeLeft, onReset }) => {
  const winningNumbersArray = Array.from(winningNumbers)
  const hasWon = winningNumbersArray.length === 15
  const hasLost = timeLeft === 0 && winningNumbersArray.length < 15

  const handleResetClick = () => {
    onReset()
  }

  return (
    (hasWon || hasLost) && (
      <div
        className={`game-status flex-container ${
          hasWon ? 'game-status-win' : 'game-status-lost'
        }`}
      >
        <h3>{hasWon ? '¡Has ganado!' : '¡Has perdido!'}</h3>
        <Button
          buttonTitle={'Jugar de nuevo'}
          className={
            hasWon ? 'button-reset-bingo-win' : 'button-reset-bingo-lose'
          }
          onClick={handleResetClick}
        />
      </div>
    )
  )
}

export default BingoGameStatus

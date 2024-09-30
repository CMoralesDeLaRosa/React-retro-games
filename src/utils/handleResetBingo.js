export const handleResetBingo = (
  resetGame,
  setCurrentNumber,
  setWinningNumbers,
  setGameOver,
  resetTimer
) => {
  resetGame()
  setCurrentNumber(null)
  setWinningNumbers(new Set())
  setGameOver(false)
  resetTimer()
}

import React, { useEffect } from 'react'
const HandleWinnerTer = ({
  userMoves,
  vsMoves,
  setGameOver,
  selected,
  isBoardFull
}) => {
  const winnerCombs = [
    [0, 1, 2],
    [2, 1, 0],
    [0, 3, 6],
    [6, 3, 0],
    [3, 4, 5],
    [5, 4, 3],
    [6, 7, 8],
    [8, 7, 6],
    [0, 4, 8],
    [8, 4, 0],
    [1, 4, 7],
    [7, 4, 1],
    [2, 5, 8],
    [8, 5, 2],
    [2, 4, 6],
    [6, 4, 2]
  ]

  const checkWinner = (moves) => {
    return winnerCombs.some((comb) => comb.every((num) => moves.includes(num)))
  }

  useEffect(() => {
    if (checkWinner(userMoves)) {
      setGameOver('win')
    } else if (checkWinner(vsMoves)) {
      setGameOver('lose')
    } else if (isBoardFull(selected)) {
      setGameOver('draw')
    }
  }, [userMoves, vsMoves, selected, setGameOver, isBoardFull])

  return null
}

export default HandleWinnerTer

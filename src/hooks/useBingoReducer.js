import { useReducer, useCallback } from 'react'

const selectNumberAction = (newNumSelected, newCurrentNumber) => ({
  type: 'SELECT_NUMBER',
  payload: { newNumSelected, newCurrentNumber }
})

const bingoReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_NUMBER':
      return {
        ...state,
        numSelected: action.payload.newNumSelected,
        currentNumber: action.payload.newCurrentNumber
      }
    case 'RESET_GAME':
      return {
        ...state,
        numSelected: [],
        currentNumber: null,
        winningNumbers: new Set(),
        gameOver: false
      }
    case 'SET_GAME_OVER':
      return {
        ...state,
        gameOver: true
      }
    case 'SET_CURRENT_NUMBER':
      return {
        ...state,
        currentNumber: action.payload
      }
    case 'SET_WINNING_NUMBERS':
      return {
        ...state,
        winningNumbers: new Set(
          Array.isArray(action.payload) ? action.payload : []
        )
      }
    default:
      return state
  }
}

const useBingoReducer = () => {
  const [state, dispatch] = useReducer(bingoReducer, {
    numSelected: [],
    currentNumber: null,
    winningNumbers: new Set(),
    gameOver: false
  })

  const selectNumber = useCallback((numSelected, currentNumber) => {
    dispatch(selectNumberAction(numSelected, currentNumber))
  }, [])

  const resetGame = useCallback(() => {
    dispatch({ type: 'RESET_GAME' })
  }, [])

  const setGameOver = useCallback(() => {
    dispatch({ type: 'SET_GAME_OVER' })
  }, [])

  const setCurrentNumber = useCallback((number) => {
    dispatch({ type: 'SET_CURRENT_NUMBER', payload: number })
  }, [])

  const setWinningNumbers = useCallback((newWinningNumbers) => {
    dispatch({ type: 'SET_WINNING_NUMBERS', payload: newWinningNumbers })
  }, [])

  return {
    state,
    selectNumber,
    resetGame,
    setGameOver,
    setCurrentNumber,
    setWinningNumbers
  }
}

export default useBingoReducer

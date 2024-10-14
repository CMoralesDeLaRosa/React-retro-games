export const initialState = {
  selected: Array(9).fill(null),
  isUserTurn: true,
  gameOver: null,
  movUser: [],
  movVS: []
}

export const ACTIONS = {
  USER_MOVE: 'USER_MOVE',
  VS_MOVE: 'VS_MOVE',
  SET_GAME_OVER: 'SET_GAME_OVER',
  RESET_GAME: 'RESET_GAME'
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.USER_MOVE:
      if (!state.isUserTurn || state.selected[action.index] || state.gameOver) {
        return state
      }

      const newMovUser = [...state.movUser, action.index]
      const newSelectedUser = [...state.selected]
      newSelectedUser[action.index] = 'user'

      return {
        ...state,
        selected: newSelectedUser,
        movUser: newMovUser,
        isUserTurn: false
      }

    case ACTIONS.VS_MOVE:
      const availableIndices = state.selected
        .map((cell, idx) => (cell === null ? idx : null))
        .filter((idx) => idx !== null)

      if (availableIndices.length > 0) {
        const randomIndex =
          availableIndices[Math.floor(Math.random() * availableIndices.length)]
        const newMovVS = [...state.movVS, randomIndex]
        const newSelectedVS = [...state.selected]
        newSelectedVS[randomIndex] = 'vs'

        return {
          ...state,
          selected: newSelectedVS,
          movVS: newMovVS,
          isUserTurn: true
        }
      }

      return state

    case ACTIONS.SET_GAME_OVER:
      return { ...state, gameOver: action.result }

    case ACTIONS.RESET_GAME:
      return initialState

    default:
      throw new Error(`Acción no manejada: ${action.type}`)
  }
}

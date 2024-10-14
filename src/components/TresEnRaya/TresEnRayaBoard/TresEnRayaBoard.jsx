import './TresEnRayaBoard.css'
import { useReducer } from 'react'
import { ACTIONS, initialState, reducer } from '../../../hooks/reducer'
import Button from '../../Button/Button'
import HandleWinnerTer from '../HandleWinnerTer'
import HandleClickTer from '../HandleClickTer'

const TresEnRayaBoard = ({ onScoreUpdate }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClick = (index) => {
    dispatch({ type: ACTIONS.USER_MOVE, index })

    setTimeout(() => {
      dispatch({ type: ACTIONS.VS_MOVE })
    }, 500)
  }

  const resetGame = () => {
    dispatch({ type: ACTIONS.RESET_GAME })
  }

  return (
    <article className='article-ter-board'>
      <div className='grid-container-ter'>
        {Array(9)
          .fill(null)
          .map((_, index) => (
            <HandleClickTer
              key={index}
              index={index}
              selected={state.selected}
              handleClick={handleClick}
              gameOver={state.gameOver}
            />
          ))}
      </div>
      <HandleWinnerTer
        userMoves={state.movUser}
        vsMoves={state.movVS}
        setGameOver={(result) => {
          if (state.gameOver === null && result) {
            dispatch({ type: ACTIONS.SET_GAME_OVER, result })
            onScoreUpdate(result)
          }
        }}
        selected={state.selected}
        isBoardFull={(selected) => selected.every((cell) => cell !== null)}
      />
      {state.gameOver && (
        <div
          className={`banner ${
            state.gameOver === 'win'
              ? 'win-banner'
              : state.gameOver === 'lose'
              ? 'lose-banner'
              : 'draw-banner'
          } flex-container`}
        >
          <h3>
            {state.gameOver === 'win'
              ? '¡Has ganado!'
              : state.gameOver === 'lose'
              ? 'Has perdido'
              : 'Empate'}
          </h3>
          <Button
            buttonTitle='Jugar de nuevo'
            onClick={resetGame}
            className={`button-reset-ter-${state.gameOver}`}
          />
        </div>
      )}
    </article>
  )
}

export default TresEnRayaBoard

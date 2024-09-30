import './BingoPlayer.css'
import React, { useState, useEffect, memo } from 'react'
import { generateRandomNumbers } from '../../../utils/generateRandomNumbers'
const BingoPlayer = memo(
  ({ numSelected, currentNumber, winningNumbers, setWinningNumbers }) => {
    const [gridNumbers, setGridNumbers] = useState([])

    useEffect(() => {
      const generateGrid = (numbers) => {
        const grid = Array.from({ length: 27 }).fill(null)
        let indices = Array.from({ length: 27 }, (_, i) => i)
        for (const num of numbers) {
          const randomIndex = Math.floor(Math.random() * indices.length)
          grid[indices[randomIndex]] = num
          indices.splice(randomIndex, 1)
        }
        return grid
      }

      const numbers = generateRandomNumbers()
      setGridNumbers(generateGrid(numbers))
    }, [])

    useEffect(() => {
      if (currentNumber !== null && gridNumbers.includes(currentNumber)) {
        setWinningNumbers((prevWinningNumbers) => {
          if (prevWinningNumbers.includes(currentNumber)) {
            return prevWinningNumbers
          }
          const newSet = [...prevWinningNumbers, currentNumber]
          return newSet
        })
      }
    }, [currentNumber, gridNumbers, setWinningNumbers])

    const winningNumbersArray = Array.from(winningNumbers)

    return (
      <article className='article-bingo-player'>
        <div className='div-bingo-selected flex-container '>
          {Array.isArray(numSelected) &&
            numSelected.map((num, index) => (
              <div key={index} className='selected-number flex-container'>
                {num}
              </div>
            ))}
        </div>
        <div className='grid-container-bingo'>
          {gridNumbers.map((num, index) => (
            <div
              key={index}
              className={`grid-item ${
                num ? (numSelected.includes(num) ? 'selected' : '') : 'empty'
              } flex-container ${
                num && winningNumbersArray.includes(num)
                  ? 'win highlighted'
                  : ''
              }`}
            >
              {num ? (
                num
              ) : (
                <img
                  src='/assets/Bingo-card.png'
                  alt='Empty'
                  className='empty-image-bingo'
                />
              )}
            </div>
          ))}
        </div>
      </article>
    )
  }
)

export default BingoPlayer

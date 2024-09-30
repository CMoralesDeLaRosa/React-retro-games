import './TresEnRaya.css'
import { useState } from 'react'
import TresEnRayaScore from '../../components/TresEnRaya/TresEnRayaScore/TresEnRayaScore'
import TresEnRayaBoard from '../../components/TresEnRaya/TresEnRayaBoard/TresEnRayaBoard'

const TresEnRaya = () => {
  const [score, setScore] = useState(0)
  const [vsScore, setVsScore] = useState(0)

  const handleScoreUpdate = (result) => {
    if (result === 'win') {
      setScore((prevScore) => prevScore + 1)
    } else if (result === 'lose') {
      setVsScore((prevVsScore) => prevVsScore + 1)
    }
  }

  return (
    <section id='section-tres-en-raya'>
      <TresEnRayaBoard onScoreUpdate={handleScoreUpdate} />
      <TresEnRayaScore score={score} vsScore={vsScore} />
    </section>
  )
}

export default TresEnRaya

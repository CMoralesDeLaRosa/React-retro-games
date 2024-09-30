import './TresEnRayaScore.css'

const TresEnRayaScore = ({ score, vsScore }) => {
  return (
    <article className='article-ter-score'>
      <div className='div-ter-score flex-container'>Tú | {score}</div>
      <div className='div-ter-score flex-container'>VS | {vsScore}</div>
    </article>
  )
}

export default TresEnRayaScore

import './Home.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'

const Home = () => {
  const navigate = useNavigate()

  const handleBingoClick = () => {
    navigate('/bingo')
  }
  const handleTresEnRayaClick = () => {
    navigate('/tres-en-raya')
  }

  return (
    <section id='section-home'>
      <Button
        buttonTitle={'Bingo'}
        className='button-home'
        onClick={handleBingoClick}
      />
      <article className='article-home-img flex-container'>
        <img src='/assets/Home-image.png' alt='Retro gaming' />
      </article>
      <Button
        buttonTitle={'Tres en raya'}
        className='button-home'
        onClick={handleTresEnRayaClick}
      />
    </section>
  )
}

export default Home

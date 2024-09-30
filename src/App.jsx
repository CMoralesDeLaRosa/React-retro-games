import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/header'
import Home from './pages/Home/Home'
import Bingo from './pages/Bingo/Bingo'
import TresEnRaya from './pages/TresEnRaya/TresEnRaya'

const App = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/' && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
        <Route path='/bingo' element={<Bingo />} />
        <Route path='/tres-en-raya' element={<TresEnRaya />} />
      </Routes>
    </>
  )
}

export default App

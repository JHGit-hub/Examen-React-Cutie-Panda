import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Start from './pages/StartScreen'
import Game from './pages/GameScreen'
import GameOver from './pages/GameOverScreen'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/GameOver" element={<GameOver />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

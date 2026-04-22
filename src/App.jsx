import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Bollywood from './components/Bollywood'
import Technology from './components/Technology'
import Hollywood from './components/Hollywood'
import Fitness from './components/Fitness'
import Food from './components/Food'
import Navbar from './components/Navbar'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/bollywood' element={<Bollywood/>} />
          <Route path='/technology' element={<Technology/>} />
          <Route path='/hollywood' element={<Hollywood/>} />
          <Route path='/fitness' element={<Fitness/>} />
          <Route path='/food' element={<Food/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
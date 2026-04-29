import React, {useState} from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Bollywood from './components/Bollywood'
import Technology from './components/Technology'
import Hollywood from './components/Hollywood'
import Fitness from './components/Fitness'
import Food from './components/Food'
import Navbar from './components/Navbar'
import Details from './components/Details'
import Home from './components/Home.jsx'
import './App.css'
import { useContext, useEffect } from 'react'
import { ThemeContext } from './Context/ThemeContext.jsx'

const App = () => {

  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/bollywood' element={<Bollywood/>} />
          <Route path='/technology' element={<Technology/>} />
          <Route path='/hollywood' element={<Hollywood/>} />
          <Route path='/fitness' element={<Fitness/>} />
          <Route path='/food' element={<Food/>} />
          <Route path = "/post/:id" element={<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import React from 'react'
import { Link } from 'react-router-dom'     

const Navbar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/bollywood'>Bollywood</Link>
      <Link to='/technology'>Technology</Link>
      <Link to='/hollywood'>Hollywood</Link>
      <Link to='/fitness'>Fitness</Link>
      <Link to='/food'>Food</Link>
    </div>
  )
}

export default Navbar
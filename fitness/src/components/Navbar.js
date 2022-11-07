import React from 'react'
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <Link to='/'>
    <img src={Logo} style={{width:'48px',height:'48px' ,marign:'0 20px'}}/>
     </Link>
     <Link to={'/'}>
        <p>Home</p>
     </Link>
     
     <a href='#exercises'>  Exercises</a>
 
 </>
  )
}

export default Navbar
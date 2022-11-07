import React from 'react'
import './App.css'
import {Box} from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExcerciseDetail  from './pages/ExcerciseDetail'


const App = () => {
  return (
    <Box width='400px'>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:id' element={<ExcerciseDetail/>} />
    </Routes>
    <Footer/>
    
    
    
    </Box>
  )
}

export default App
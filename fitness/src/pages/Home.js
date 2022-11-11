import React from 'react'
import {Stack} from '@mui/material'
import { useState,useEffect } from 'react'
import HorizontalScroll from '../components/HorizontalScroll'

import Hero from '../components/Hero'
import Search from '../components/Search'
import Exercises from '../components/Exercises'
const Home = () => {
  const [Value,setValue]=useState('');
  const [Exercise, setExercise] = useState([])
  const [ExerciseType, setExerciseType] = useState([]) 
  return (
    <Stack>
      <Hero/>
      <Search Value={Value} setValue={setValue} Exercise={Exercise} setExercise={setExercise  } ExerciseType={ExerciseType} setExerciseType={setExerciseType}/>
      <HorizontalScroll data={ExerciseType}/>
      <Exercises Exercise={Exercise}/>
    </Stack>
  )
}

export default Home
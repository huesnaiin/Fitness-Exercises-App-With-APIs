import React from 'react'
import {Stack} from '@mui/material'

import Hero from '../components/Hero'
import Search from '../components/Search'
import Exercises from '../components/Exercises'
const Home = () => {
  return (
    <Stack>
      <Hero/>
      <Search/>
      <Exercises/>
    </Stack>
  )
}

export default Home
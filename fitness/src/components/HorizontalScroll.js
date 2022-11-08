import React from 'react'
import {Box} from '@mui/material'

const HorizontalScroll = ({data}) => {
    
  
  return (
    <div>
      
       {data.map((item)=>(< Box>{item}</Box>))}
       
    </div>
  )
}

export default HorizontalScroll
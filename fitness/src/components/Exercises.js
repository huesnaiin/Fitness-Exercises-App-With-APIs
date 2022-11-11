import React from 'react'
import ExerciseCard from './ExerciseCard'
import { Pagination } from '@mui/material'

const Exercises = ({Exercise}) => {
  return (
    <>
    {Exercise.map((exercise,index)=>(
      <ExerciseCard exercise={exercise} id={index} />
    ))}
    {Exercises.length > 4 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(Exercises.length / 4)}
            
            size="large"
          />
        )}
    </>
  )
}

export default Exercises
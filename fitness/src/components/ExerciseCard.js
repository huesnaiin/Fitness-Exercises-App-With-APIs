import React from 'react'
import { Link } from 'react-router-dom'
import { Button,Typography } from '@mui/material'

const ExerciseCard = ({exercise,id}) => {
  return (
    <>
    <div>{id}</div>
    <Link to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} Loading='lazy' /></Link>
    <Button>{exercise.bodyPart}</Button>
    <Button>{exercise.target}</Button>
    <Typography>
    {exercise.equipment}
    </Typography>
    </>
  )
}

export default ExerciseCard
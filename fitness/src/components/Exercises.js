import React from 'react'
import ExerciseCard from './ExerciseCard'
import { Pagination ,Stack} from '@mui/material'

const Exercises = ({Exercise}) => {
  const [CurrentPage,setCurrentPage]=React.useState('1');
  const paginate=(e,number)=>{
    setCurrentPage(number);
    window.scrollTo({top:700,behavior:'smooth'})
  }
  const ExcercisePerPage=2;
  const PageLastExercise=CurrentPage*ExcercisePerPage;
  const PageStartExercise=PageLastExercise-ExcercisePerPage;
  const ShowedExercises=Exercise.slice(PageStartExercise,PageLastExercise);
  
  return (
    <>
    {ShowedExercises.map((exercise,index)=>(
      <ExerciseCard exercise={exercise} id={index} />
    ))}
    <Stack>

    { ( Exercise.length > 4 ?(
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(Math.ceil(Exercise.length /ExcercisePerPage))}
            page={CurrentPage}
            onChange={paginate}
            size="large"
          />):null
        )}
        
        
        <h1>{PageStartExercise}</h1>
        <h1>{PageLastExercise}</h1>
        </Stack>
    </>
  )
}

export default Exercises
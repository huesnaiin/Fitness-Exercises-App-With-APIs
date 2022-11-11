import React from 'react'
import {Box,TextField,Typography,Button} from '@mui/material'
import { useState,useEffect } from 'react'
import { fetchData } from '../Datahandler/Data'
import { KeyOption } from '../Datahandler/Data'
import HorizontalScroll from './HorizontalScroll'



const Search = ({Value,setValue,Exercise,setExercise,ExerciseType,setExerciseType}) => {
    

    useEffect(()=>{
        const Exercisetype=async()=>{ 
          const TypeData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',KeyOption)
          setExerciseType([...TypeData]);
          console.log(ExerciseType)
          console.log('useEffect')
        }
        Exercisetype();
    },[])
    

    const  handleClick= async()=>{
       if(Value){
            const ExerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',KeyOption)
            const FilteredData=ExerciseData.filter((item)=>item.bodyPart.includes(Value)||
                item.equipment.includes(Value)||
                item.name.includes(Value)||
                item.bodyPart.includes(Value),
            )

            
            setValue('')
            setExercise(FilteredData)
            console.log(FilteredData)
       }
    }


  return (
    <Box>
        <TextField value={Value} onChange={(e)=>{setValue(e.target.value.toLowerCase())}}  />
        <Button  onClick={handleClick} >Click Here</Button>
        

    </Box>
    
  )
}

export default Search
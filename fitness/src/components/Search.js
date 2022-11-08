import React from 'react'
import {Box,TextField,Typography,Button} from '@mui/material'
import { useState,useEffect } from 'react'
import { fetchData } from '../Datahandler/Data'


const Search = () => {
    const [Value,setValue]=useState('');
    const [Exercise, setExercise] = useState([])

    const  handleClick= async()=>{
       if(Value){
            const ExerciseData=await fetchData()
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
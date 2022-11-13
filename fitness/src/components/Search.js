import React from 'react'
import {Box,TextField,Typography,Button,Stack} from '@mui/material'
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
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={Value}
          onChange={(e) => setValue(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleClick}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        
      </Box>
    </Stack>
    
  );
};

export default Search
export const fetchData= async() =>{
    const Rawdata=await fetch('https://exercisedb.p.rapidapi.com/exercises',{
        method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'effbb878d5msh464e463278c9d6dp1a0eb7jsn88b86efb05c3',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }})

      const data=await Rawdata.json()
      return data
}
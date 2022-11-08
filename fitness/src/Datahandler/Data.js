export const KeyOption={
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'effbb878d5msh464e463278c9d6dp1a0eb7jsn88b86efb05c3',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'

}
}
export const fetchData= async(url,option) =>{
    const Rawdata=await fetch(url,option)

      const data=await Rawdata.json()
      return data
}
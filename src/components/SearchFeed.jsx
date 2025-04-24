import {useState, useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import Videos from './Videos'

import { fetchFromAPI } from '../utils/fetchFromAPI'



const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { searchTerm } = useParams()

  useEffect(() => {
    setIsLoading(true)
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
        setVideos(data.items)
        setIsLoading(false)
      })  
  },[searchTerm])

  if (!videos?.length) return (<Box minHeight='95vh' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Typography variant='h6' fontWeight="bold" color="white">
      No videos found for: <span style={{color: 'red'}}>{searchTerm}</span>
    </Typography>
  </Box>
  )
  
  return (
    <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
    <Typography variant='h4' fontWeight="bold" ml={2} mb={2} color="white">
      Search result for: <span style={{color: 'red'}}>{searchTerm}</span>
    </Typography>
    {isLoading ? 'Loading' : <Videos videos={videos} />}
  </Box>
  )
}

export default SearchFeed
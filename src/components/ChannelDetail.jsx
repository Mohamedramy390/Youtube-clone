import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { Videos, ChannelCard } from "./"
import { fetchFromAPI } from "../utils/fetchFromAPI"


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams()
  

  useEffect(() => {
    setIsLoading(true)
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => 
      setChannelDetail(data.items[0])
    )
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => 
      setVideos(data.items),
      setIsLoading(false)
  )
  }, [id])

  console.log(channelDetail)
  
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,90,1) 0%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }} />
        
        {channelDetail && <ChannelCard channelDetail={channelDetail} marginTop="-110px" />}
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{ mr: { sm: '100px' } }} />
        {isLoading ? 'Loading...' : <Videos videos={videos} />}
      </Box>
    </Box>
  )
}  

export default ChannelDetail
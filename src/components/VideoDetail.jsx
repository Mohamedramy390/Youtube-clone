import React, { use } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { useState, useEffect } from 'react'
import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ReactPlayer from 'react-player'


const VideoDetail = () => {

  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statictics&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items[0])
      })
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => {setVideos(data.items)})
  },[id])

  if (!videoDetail?.snippet) return 'Loading...'


  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail
  
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', sm: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer className='react-player' url={`https://www.youtube.com/watch?v=${id}`} controls />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff', opacity: 0.8, px: 2, py: 1 }}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{opacity: 0.75}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity: 0.75}}>
                  {parseInt(likeCount).toLocaleString()} like
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box display='flex' p='2'>
          <Box sx={{ mr: { sm: '100px' } }} />
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
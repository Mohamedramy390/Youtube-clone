import React from 'react'
import { Box, Stack } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({videos, direction}) => {
    
  if (!videos?.length) return 'Loading...'

  return (
    <Stack
    direction={direction || "row"} flexWrap={"wrap"} gap={2}
    sx={{
        justifyContent:{md: 'start', xs: 'center'},
      }}
    >
    {videos.map((item, idx) => (
        <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
    ))}
    </Stack>
  )
}

export default Videos
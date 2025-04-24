import { Typography, Card, CardMedia, CardContent } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle } from "../utils/constants"

const VideoCard = ({video : {id : {videoId}, snippet}}) => {
    
  return (
    <Card sx={{width:{md: '320px', xs: '400px'}, boxShadow:'none', borderRadius:'none'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet.thumbnails.high.url || demoThumbnailUrl}
                alt={snippet.title}
                sx={{width: '400px', height: 180}}
            />
        </Link>
        <CardContent sx={{backgroundColor: "#1e1e1e", height: '106px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight={600} color="#fff">
                    {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" fontWeight={600} color="gray">
                    {snippet.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                    <CheckCircle sx={{fontSize: 12, color: "gray", ml: '5px'}} />
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard
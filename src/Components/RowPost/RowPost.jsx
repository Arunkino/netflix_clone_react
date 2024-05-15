import React from 'react'
import './RowPost.css'
import { useEffect } from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constans/constans'
import { useState } from 'react'
import YouTube from 'react-youtube'

function RowPost(props) {

  const [videoId, setVideoId]= useState("")

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const [movies, setMovies]=useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>
    {
      console.log(response.data.results)
      setMovies(response.data.results)
    })
  },[])

  const handleMovieClick=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      
      if(response.data.results.length>0){
        setVideoId(response.data.results[0].key)
        console.log(response.data.results[0])
      }else{
        console.log("Array is empty")
      }
      

    })

  }


  return (
    <div className='row'>
        <h2 className='poster-title'>{props.title}</h2>
        <div className="posters">
            
          {movies.map((movie)=><img onClick={()=>handleMovieClick(movie.id)} className={props.isSmall ? 'small-poster-img': 'poster-img' }src={`${imageUrl+movie.backdrop_path}`} alt="Poster" />)}
        </div>
        {videoId && <YouTube videoId={videoId} opts={opts} />}
    </div>

  )
}

export default RowPost

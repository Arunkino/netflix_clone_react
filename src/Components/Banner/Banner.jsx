import React from 'react'
import './Banner.css'
import axios from '../../axios'
import { useEffect } from 'react'
import {API_KEY,imageUrl} from '../../constans/constans'
import { useState } from 'react'

function Banner() {
  const [movie, setMovie]=useState()
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then(
      (response)=>{
        setMovie(response.data.results[1])
      }
      
    )

    } , [])

  return (
    <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}>
        <div className='content'>
            <h1 className='title'>{movie? movie.title : "Loading..."}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{ movie? movie.overview: "Some content is loading here..." }</h1>
        </div>
        <div className="fade-bottom">
            
        </div>
      
    </div>
  )
}

export default Banner

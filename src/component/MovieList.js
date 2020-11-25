import React,{useState} from 'react';
import {MovieCard} from  './MovieCard';
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

import StarRatingComponent from "react-rating-stars-component";
import '../App.css'
export const MovieList = (props) => {
    const [titre, settitre]=useState("")
    const [rate,setrate]=useState(0)
    const handleSearch =(e)=>{
        e.preventDefault();
        settitre(e.target.value)
    }
    const handleRate=(r)=>{
        setrate(r)
    }
    console.log(props)
    return (
            <div >
            <div className="fawzi">
   <input type="text" placeholder="movie name" onChange={e=>handleSearch(e)} />
   

       <StarRatingComponent
               count={5}
               onChange={handleRate}
               size={24}
               activeColor="#ffd700"
       /></div>
       
       
  
<div className='wis'>
{props.Movies.filter(el=>el.titre.toUpperCase().includes(titre.toUpperCase())).filter(el=>el.rate>=rate).map((el,index)=><div key={index}> <MovieCard  titre={el.titre} rate={el.rate} img={el.img} /> </div>)}
     
       
           
        </div>
        </div>)
}

import React, { useState } from 'react'
import './ImageSlider.css'
const ImageSlider = (props) => {
    const[index,setIndex]=useState(0);

    const handlePrev=()=>{

(index===0)?setIndex(props.data.length-1):
 setIndex(index-1)

    }
    const handleNext=()=>{
       setIndex((index+1)%(props.data.length))
        

    }
  return (
    <div >
        <div className='images'>
        <img src={props.data[index]} alt="sliderImages">      
        </img>
        </div>
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
       
        </div>
  )
}

export default ImageSlider
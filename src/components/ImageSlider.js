import React, { useState } from 'react'
import './ImageSlider.css'
const ImageSlider = ({data}) => {
    const[index,setIndex]=useState(0);
    const handlePrev=()=>{
setIndex(index-1)

    }
    const handleNext=()=>{
        setIndex(index+1)
    }
  return (
    <div >
        <div className='images'>
        <img src={data[index]} alt="sliderImages">      
        </img>
        </div>
        <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
       
        </div>
  )
}

export default ImageSlider
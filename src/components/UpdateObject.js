//Updating objects in state

import React, { useState } from 'react'

const ListExp = () => {
    const [details,setDetails]=useState(
        {
            name:'Niki',
            artworks:{
            title:"Blue Nana",
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        
    }
}
    )
       
    const handleChange=(e)=>{
        setDetails({

            ...details,
            name:e.target.value
        }
            
            
            )
    }
const handleTitleChange=(e)=>{
    setDetails({
        ...details,
        artworks:{...details.artworks,
            title:e.target.value}
    })
}
const handleCityChange=(e)=>{
    setDetails({
        ...details,
        artworks:{...details.artworks,
        city:e.target.value}
    })
}
  return (
    <div>
        <label>Name:
        <input onChange={handleChange} placeholder={details.name}>
            {/* {details.name} */}
            
            </input> 
             </label>

      
        <label>Title:
        <input  placeholder={details.artworks.title} 
        onChange={handleTitleChange}
        ></input> 
        </label>


<label>City:
<input placeholder={details.artworks.city}
onChange={handleCityChange}
>
    
</input>
 </label>


<label>Image:
<img src={details.artworks.image} alt="statue"></img>
     </label>  

     <p>
      Created by :{details.name}</p>  
      <p>
      Title :{details.artworks.title}</p>  
      <p>
      Located in :{details.artworks.city}</p>  


    </div>
  )
}

export default ListExp
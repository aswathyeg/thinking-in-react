import React, { useState } from 'react'

const UpdateArray = () => {
    const [initialList,setInitialList]=useState([
        { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
    ]);
    // const handleClick=()=>{
    //     setInitialList([...initialList,
    //     initialList.seen=true])
    // }
  return (

    <div>
        {
initialList.map((initial)=>{
    return(
        <ul>
        <li key={initial.id} 
        
        >
            <input type='checkbox' ></input>
            {initial.title}
            {/* onClick={handleClick} */}
        </li>
    </ul>
    
    )
   
   

})
        }
        
        
        </div>
  )
}

export default UpdateArray
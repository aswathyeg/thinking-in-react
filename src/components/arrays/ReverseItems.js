import React, { useState } from 'react'

const ReverseItems = () => {
    const initialItems=[
        { id: 0, title: 'Big Bellies' },
        { id: 1, title: 'Lunar Landscape' },
        { id: 2, title: 'Terracotta Army' }
    ]
    const [items,setItems]=useState(initialItems);
    const handleClick=()=>{
        const nextList=[...items];//first copy
        setItems(nextList.reverse())// then reverse
    }
  return (
    <div>
        {items.map((c,i)=>
             <ul>
             <li key={c.i}>
                 {c.title}
 
             </li>
         </ul>
        
         )}
        
        <button onClick={handleClick}>Reverse</button>
    </div>
  )
}

export default ReverseItems
import React, { useState } from 'react'
let nextId=0;
const Insert = () => {
    const initialItems=[ { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},]

    const[items,setItems] =useState(initialItems)
    const[name,setName] =useState('')
    const handleClick=()=>{
        let insertAt=1;
       let newItems=[
        ...items.slice(0,insertAt),//items from index 0 to 1
        {id:nextId++,
        name:name},// new item 
        ...items.slice(insertAt)// remaining items  

       ]
setItems(newItems);
setName('');
    }
  return (
    <div>
      <h1>Inspiring Sculptures</h1>  
      <input value={name}
      onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={handleClick}>Insert</button>
      {items.map(itemArray=>
        <ul>
            <li>{itemArray.name}</li>
        </ul>)}
        </div>
  )
}

export default Insert
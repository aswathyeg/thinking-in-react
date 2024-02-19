import React, { useState } from 'react'

const ReplaceArrayItems = () => {
    let initialCounters=[0,0,0];
    const[counter,setCounter]=useState(initialCounters);
    const handleClick=(index)=>{
        const next=counter.map((c,i)=>{
            if (i===index){
return c+1;
            }
            else{
                return c;
            }
        })
        setCounter(next);
        
    }
  return (
    <div>
       {counter.map((counter,i)=>
        <ul>
            <li key={i}>
                {counter}
<button onClick={()=>{
    handleClick(i);}}>+1</button>
                
            </li>
        </ul>)}
        </div>
  )
}

export default ReplaceArrayItems
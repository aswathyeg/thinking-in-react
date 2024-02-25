import React, { useState } from 'react'

const PreserveResetState = ({styling}) => {

    let[hover,setHover]=useState(false);
    let[count,setCount]=useState(0);


    let classname='counter';

    if(hover){
        classname += ' hover';
    }
    if(styling){
        classname += ' fancy';
    }

  return (
    <>
    <div className={classname}
    onPointerEnter={() => setHover(true)}
    onPointerLeave={() => setHover(false)}>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Add one</button>
      
        
    </div>
   

    </>
  )
}

export default PreserveResetState
import React, { useState } from 'react'
import './App.css';
import PreserveResetState from './components/PreserveResetState';

function App() {
  let [styling,setStyling]=useState(false)
 
  return (
    <div className="App">
       {styling?<PreserveResetState styling={true}/>:<PreserveResetState styling={false}/>}
 <label>
        <input 
        type='checkbox'
        checked={styling}
        onChange={(e)=>{setStyling(e.target.checked)}}/>
        Apply Styling
    </label>
     
    </div>
  );
}

export default App;

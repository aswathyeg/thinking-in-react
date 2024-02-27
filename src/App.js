import React, { useState } from 'react'
import './App.css';
import PreserveResetState from './components/PreserveState';

function App() {
  let [styling,setStyling]=useState(false)
 
  return (
    <div className="App">
       {styling? <p>See you later!</p> :<PreserveResetState styling={false}/>}
 <label>
        <input 
        type='checkbox'
        checked={styling}
        onChange={(e)=>{setStyling(e.target.checked)}}/>
        Take a break
    </label>
     
    </div>
  );
}

export default App;

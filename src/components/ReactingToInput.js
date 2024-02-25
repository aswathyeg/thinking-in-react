import React, { useState } from 'react'

const ReactingToInput = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');
  const handleChange=(e)=>{
    setAnswer(e.target.value)
  }
  if (status==='success'){
    return <h1> That's right !</h1>
  }
async function handleSubmit(e){

  
  e.preventDefault();
  setStatus('submitting');
  try{ 
    await submitForm(answer);
    setStatus('success')
  }
  catch(error){
setStatus('typing')
setError(error)
  }
  
}
const submitForm=(answer)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let shouldError= answer.toLowerCase()!=='lima';
      if(shouldError){
        reject(new Error('Good guess but a wrong answer. Try again!'))
      }
      else{
        resolve();
      }
    },1500)
  })


}

  return (
    <div>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form  onSubmit={handleSubmit} >
      <textarea onChange={handleChange}
      value={answer}
      disabled={status==='submitting'}
      ></textarea>
      <br></br>
      <button 
      disabled={answer.length===0||status==='submitting'}>Submit</button>   
      {error!==null&& <p> {error.message} </p>} 
       </form>
    </div>
  )
}

export default ReactingToInput
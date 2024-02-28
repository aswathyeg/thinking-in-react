import React from 'react'

const AddTask = ({onAddTask}) => {
  return (
    <div>
        
        <input type='text'
        />
        <button onClick={onAddTask}>Add</button>
        </div>
  )
}

export default AddTask
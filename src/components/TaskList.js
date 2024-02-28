import React from 'react'

const TaskList = ({tasks,onChangeTask,onDeleteTask}) => {
  return (
    <div> 
        <ul>
            {
                tasks.map((items)=>
                <>
                    <li>
                        {items.text}
                    </li>
                    <button onClick={onChangeTask}>Change</button>  
                    <button onClick={onDeleteTask}>Delete</button>
                    </>
                )
            }
        </ul>
      
</div>
  )
}

export default TaskList
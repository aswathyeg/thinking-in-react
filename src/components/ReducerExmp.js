import React from 'react'
import TaskReducer from'./TasksReducer';
import { useReducer } from "react";
import AddTask from './AddTask';
import TaskList from './TaskList';
let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

const ReducerExmp = () => {
const[tasks,dispatch]=useReducer(TaskReducer,initialTasks);

const handleAddTask=(text)=>{
    dispatch({
        type:'added',
        id:nextId++,
        text:text

    })

}
const handleChangeTask=(task)=>{
    dispatch({
        type:'changed',
        task:task

    })}
    const handleDeleteTask=(taskId)=>{
        dispatch({
            type:'deleted',
            id:taskId
           
    
        })}

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
       {/* <ul>
            {
                tasks.map((items)=>
                    <li>
                        {items.text}
                    </li>
                )
            }
        </ul> */}
    </>
  );
  
}

export default ReducerExmp
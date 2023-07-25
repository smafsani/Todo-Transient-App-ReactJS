import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Todo = ({task, toggleFinished, deleteTask, editTodo}) => {
  return (
    <div className='todo'>
        <div className='task-div'>
            <div className='check-icon' onClick={() => toggleFinished(task.id)}>{
                task.finished ?
                (<FontAwesomeIcon className='check' icon="check" />) : 
                ''
            }</div>
            <span className='task-title'>{task.task}</span>
        </div>
        <div>
            <FontAwesomeIcon className='todo-action' icon="pen-to-square" onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon className='todo-action' icon="trash" onClick={() => deleteTask(task.id)} />
        </div>
    </div>
  );
}

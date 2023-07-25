import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInput } from '../hooks/useInput';
import { ErrorAlert } from './ErrorAlert';

export const TodoForm = ({addTodo}) => {
    const [task, bindTask, resetTask] = useInput("", "text");
    const [taskInputError, setTaskInputError] = useState([false, ""]);
    const submitHandler = e => {
        e.preventDefault();
        if(task){
            addTodo(task);
            resetTask();
            setTaskInputError([false, ""]);
        }
        else{
            setTaskInputError([true, "Invalid Task Provided!"]);
        }
    };
    return (
        <div>
            <form className='todo-form' onSubmit={submitHandler}>
                <input {...bindTask} className='task-input' placeholder='What for today?' />
                <button type="submit" className='task-submit'>
                    <FontAwesomeIcon icon="plus" />
                </button>
            </form>
            {
                taskInputError[0] ? 
                <ErrorAlert message={taskInputError[1]} /> : 
                ''
            }
        </div>
    );
}

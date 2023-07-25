import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useInput } from '../hooks/useInput';

export const EditTodo = ({old_task, editTask}) => {
    const [task, bindTask, resetTask] = useInput(old_task.task, "text");
    const submitHandler = e => {
        e.preventDefault();
        editTask(task, old_task.id);
        resetTask();
    };
    return (
        <form className='todo-form todo-form-edit' onSubmit={submitHandler}>
            <input {...bindTask} className='task-input' placeholder='Update your task!' />
            <button type="submit" className='task-submit'>
                <FontAwesomeIcon icon="pen-to-square" />
            </button>
        </form>
    );
}


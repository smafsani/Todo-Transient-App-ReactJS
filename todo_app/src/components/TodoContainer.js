import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { TodoForm } from './TodoForm';
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
import { EditTodo } from './EditTodo';
import { faCheck, faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { ErrorAlert } from './ErrorAlert';
uuidv4();

library.add(faTrash, faPenToSquare, faCheck, faPlus);

export const TodoContainer = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = task =>{
        setTodos([...todos, {
            id : uuidv4(),
            task : task,
            finished : false,
            isUpdating : false
        }]);
    };
    const toggleFinished = id => {
        setTodos(todos.map(task => task.id === id ? {...task, finished : !task.finished} : task));
    };
    const deleteTask = id => {
        setTodos(todos.filter(task => task.id !== id));
    };
    const editTodo = id => {
        setTodos(todos.map(task => task.id === id ? {...task, isUpdating : true} : task));
    };
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task : task, isUpdating : false} : todo));
    };
    return (
        <div className='todo-container'>
            <h2>What To Do?</h2>
            <TodoForm addTodo={addTodo} />
            <div className='todo-grid'>
            {
                todos.map((task, index) => (
                    task.isUpdating ? (<EditTodo key={uuidv4()} old_task={task} editTask={editTask} />) : 
                        (
                        <Todo task={task} key={task.id} toggleFinished={toggleFinished} 
                        deleteTask={deleteTask} editTodo={editTodo} />
                        )
                ))
            }
            </div>
        </div>
    );
}

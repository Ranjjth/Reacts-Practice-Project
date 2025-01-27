import React from 'react'
import { useTodo } from '../context';
import { useState } from 'react';

function TodoForm() {
    
    const [todo, setTodo] = useState([])

    const {addTodo} = useTodo()

    const addTodos = (e) =>{
        e.preventDefault();

        if(!todo) return

        addTodo({todo, completed: false})
        console.log(todo)
        
        setTodo("")
    }

    return (
        <form onSubmit={addTodos}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="px-3 py-1 text-white bg-green-600 rounded-r-lg shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
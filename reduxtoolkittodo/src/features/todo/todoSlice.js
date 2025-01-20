import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{id: 1, text: "hello  world"}]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo:(state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
        },
        removeTodo:(state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        }
    }
})
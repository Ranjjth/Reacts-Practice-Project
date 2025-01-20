import { useEffect, useState } from 'react'
import { TodoProvider } from './context'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) =>[...prev,{id: Date.now(), ...todo}]) 
    console.log(todos);
    
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo)=>prevTodo.id!== id))
  }

  const completeTodo = (id) => {
    setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) setTodos(todos)
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, completeTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
                    <h1 className="mt-2 mb-8 text-2xl font-bold text-center">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/* Loop and Add TodoItem here */}
                        {todos.map((todo)=>{
                          return <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        })}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
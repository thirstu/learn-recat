import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import {TodoContext,  TodoContextProvider } from './context/todoContext.js'
function App() {
  const [todos,setTodos]=useState([]);
  console.log(todos);
  const addTodo = (todo) => {
    console.log(todo);
    setTodos((preTodo)=>[...preTodo,{id:Date.now(),todo}])
  };
  const updateTodo = (id,todo) => {
    setTodos((preTodo)=>preTodo.map(preTodo=>(preTodo.id===id?todo:preTodo)))
    // Your logic to update todos here
  };
  const deleteTodo = (id) => {
    setTodos((preTodo)=>preTodo.filter(preTodo=>(preTodo.id!==id)))
  };
  const toggleComplete = (id) => {
    setTodos((preTodo)=>preTodo.map(preTodo=>(preTodo.id===id?{...preTodo,completed:!preTodo.completed}:preTodo)));
  };

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"));
    console.log(todos);

    if( todos && todos.length>0){
      setTodos(todos);
    }

  },[]);

  useEffect(()=>{

    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);
  return (
    <TodoContextProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete,}}>
  <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map(todo=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}

                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App

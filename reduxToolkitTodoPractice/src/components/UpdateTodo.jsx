import React,{useState} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { removeTodo ,updateTodo} from '../features/todo/todoSlice';

function UpdateTodo({editTodo,todo,todoMsg,toggleComplete,isTodoEditable}) {
  const [input,setInput]=useState(todo.text);
  const dispatch = useDispatch();

  const addTodoHandler=(e)=>{
    e.preventDefault();
    editTodo(todo);
    setInput('');
  };

return (
  <form onSubmit={addTodoHandler} className='space-x-3mt-12'>
  <input 
  type="text"
  className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
  placeholder='Enter a Todo...'
  value={input}
  onChange={(e)=>setInput(e.target.value)}
   />
   <button
   type='submit'
   className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
  //  onClick={toggleComplete(todo)}
   >
    Update Todo

   </button>
</form>
)
}

export default UpdateTodo;
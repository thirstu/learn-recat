import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { removeTodo ,updateTodo} from '../features/todo/todoSlice';
import UpdateTodo from './UpdateTodo';

function Todo() {
  const [isTodoEditable, setIsTodoEditable]=useState(false);
  const dispatch = useDispatch();
  const todos=useSelector(state=>state.todos);
  console.log(todos.length);
  console.log(todos);
  console.log(isTodoEditable);
  // if(todos.length===0)return <div>No todos</div>;

  const [todoMsg, setTodoMsg]=useState('');
  const [todoIdBeingEdited, setTodoIdBeingEdited]=useState(null);
console.log(todoMsg);
// console.log(todoMsg);

  const editTodo=(todo,todoMsg)=>{

    // console.log(todos);

    // console.log('editTodo',todo);
    // console.log('editTodo',todoMsg);
    // console.log('editTodo',todoIdBeingEdited);
   dispatch(updateTodo({...todo,text:todoMsg} ));
  //  console.log('editTodo',todos);
  //  console.log('editTodo',todo);
    setIsTodoEditable(false);
  }
  console.log(todos);


  const finalValue=(todo)=>{
    if(todo.id===todoIdBeingEdited){
      // isTodoEditable?todoMsg:todo.text
      return todoMsg;
    }else{
      return todo.text;
    }
   };


  const toggleComplete =(todo)=>{

    setIsTodoEditable(!isTodoEditable);
    setTodoMsg(todo.text); 
    console.log('toggleComplete', isTodoEditable);

    if(isTodoEditable===true){
      console.log('toggleComplete',isTodoEditable);
      // setTodoMsg(todo.text); // Set todoMsg to the text of the todo being edited
      setTodoIdBeingEdited(todo.id);
      console.log('toggleComplete',todoMsg);
    console.log('toggleComplete',todoIdBeingEdited);
      editTodo(todo);

    }else {
      return;
    };

  };


  return (
    <>
    <div>todo</div>
    {console.log(todos)}
    {
    todos.map((todo)=>{
      console.log(todo);
      return isTodoEditable?(<UpdateTodo editTodo={editTodo} todo={todo} todoMsg={todoMsg} toggleComplete={toggleComplete} isTodoEditable={isTodoEditable} />):(<li key={todo.id}>
        <input type="checkbox" />
        <input type="text"
        className='w-fit'
         value={isTodoEditable?todoMsg:todo.text}
         onChange={(e) => {
          setTodoMsg(prevTodoMsg => {
            console.log('todoMsg', prevTodoMsg); // Log the previous state value
            console.log('new todoMsg', e.target.value); // Log the new value from the event
            return e.target.value; // Update the state with the new value
          });
        }}
         readOnly={!isTodoEditable}
         />

      <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
      <button onClick={()=>toggleComplete(todo)}>{isTodoEditable?"📂":"🖋"}</button>
    </li>)
    }
    )
    }
    </>
  )
}

export default Todo
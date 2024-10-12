import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { removeTodo ,updateTodo} from '../features/todo/todoSlice';
import UpdateTodo from './UpdateTodo';

function Todo() {
  // const [isTodoEditable, setTodoIdBeingEdited]=useState(false);
  const [todoIdBeingEdited,setTodoIdBeingEdited]=useState(null);
  const [todoMsg, setTodoMsg]=useState('');

  const dispatch = useDispatch();
  const todos=useSelector(state=>{
    console.log(state.todos.todos);
    return state.todos.todos;
  });
  console.log(todos.length);
  console.log(todos);
  // if(todos.length===0)return <div>No todos</div>;

  // const [todoIdBeingEdited, setTodoIdBeingEdited]=useState(null);
console.log(todoMsg);
console.log(todoMsg);

  const editTodo=(todo,todoMsg)=>{
    
    console.log(todo,todoMsg);
   dispatch(updateTodo({...todo,text:todoMsg} ));
    setTodoIdBeingEdited(false);
    
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

    // setTodoIdBeingEdited(!todoIdBeingEdited);
    // setTodoMsg(todo.text); 
    console.log('toggleComplete', todoIdBeingEdited);

    if(todoIdBeingEdited===todo.id){
      
      console.log('toggleComplete',todoIdBeingEdited);
      // setTodoMsg(todo.text); // Set todoMsg to the text of the todo being edited
      // setTodoIdBeingEdited(todo.id);
      console.log('toggleComplete',todoMsg);
      editTodo(todo,todoMsg);

    }else {
      console.log(todoMsg,todo.text,todo.id);
            // Enter edit mode for this todo
            setTodoMsg(todo.text);
            setTodoIdBeingEdited(todo.id);
      
    };

  };
  // const toggleComplete = ()=>{
  //   // setTodoIdBeingEdited(!isTodoEditable);
  //   console.log(isTodoEditable,todos);

  // }


  return (
    <div className='hello'>
    <div>todo</div>
    {console.log(todos)}
    {
    todos.length === 0 ? (
      <div>No todos</div>
    ):(todos.map((todo)=>{
      const isBeingEdited=todoIdBeingEdited===todo.id;
      console.log(todo.id,todoMsg);
      return isBeingEdited?(<UpdateTodo
      key={todo.id}
      editTodo={editTodo} 
      todo={todo}
        todoMsg={todoMsg} 
        toggleComplete={toggleComplete}
        />
        ):(<li key={todo.id}>
        <input type="checkbox" />
        <input type="text"
        className='w-fit'
        value={isBeingEdited?todoMsg:todo.text}
        onChange={(e) => {
          console.log('todoMsg',e); // Log the previous state value
          console.log('new todoMsg', e.target.value); // Log the new value from the event
          if(isBeingEdited){
            setTodoMsg(prevTodoMsg => {
            
              console.log('todoMsg', prevTodoMsg); // Log the previous state value
              console.log('new todoMsg', e.target.value); // Log the new value from the event
              return e.target.value; // Update the state with the new value
            });
          }
        }}
        readOnly={!isBeingEdited}
        />

      <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
      <button onClick={()=>toggleComplete(todo)}>{isBeingEdited?"📂":"🖋"}</button>
    </li>)
    }
    ))
    }
    </div>
  )
}

export default Todo
import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"hello world",completed:false}],

};
  
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            if(!action.payload)return;
            const todo={

                id:nanoid(),
                text:action.payload, 
                
            }
            state.todos.push(todo);
        },
        removeTodo:(state,action)=>{
            console.log("store",action);
            console.log("store",state);
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            console.log("store",state,action);
            const {id,text}=action.payload;
            // const log=[{id:1},{id:5},{id:6},{id:41}];
            // console.log(log.find(log=>log.id===41));
            console.log("store",action.payload);
            console.log(id,text);
            // console.log(state.todos.map(todos=>console.log(todos)));
            state.todos=state.todos.map(todo=>{
                console.log("store",action.payload);
                console.log("store",todo.id);
                console.log("store",todo.id===action.payload.id);
                return todo.id===action.payload.id?({...todo,text:text}):todo;
            });
        },

    }
})

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions;

export default todoSlice.reducer;
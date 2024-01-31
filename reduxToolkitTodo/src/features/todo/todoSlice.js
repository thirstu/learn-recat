import {createSlice,nanoid}from '@reduxjs/toolkit'

const initialState={
    todos:[{id:1, text:'Hello world'}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo:(state,action)=> {
            console.log(state.todos);
            console.log(action);
            const todo = {
                id:nanoid(),
                text: action.payload
            };
            state.todos.push(todo);

        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
            console.log(state.todos);
            console.log(action);
        },
        updateTodo:(state,action)=>{
            console.log(state);
            console.log(action);
            state.todos.map(todo=>todo.id===action.payload&&{id:todo.id,text:action.payload.text})
        },
       

    }

})

export const {addTodo, removeTodo,updateTodo}=todoSlice.actions;

export default todoSlice.reducer;
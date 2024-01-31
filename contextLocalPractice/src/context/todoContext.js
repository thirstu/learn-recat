import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:'hello',
            completed:false,

        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},

});

export const useTodoContext = function(){
    return useContext(TodoContext);
}
// console.log(useTodoContext());
console.log(TodoContext);

export const TodoContextProvider = TodoContext.Provider;
console.log(TodoContextProvider);

export default TodoContext;
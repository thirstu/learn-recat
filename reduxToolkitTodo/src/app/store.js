import {configureStore} from '@reduxjs/toolkit'
import todo from '../features/todo/todoSlice';
export const store =configureStore({
    reducer: todo
});  
import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import postsSlice from "./postsSlice.js";
const store =configureStore({
    reducer:{
        auth:authSlice,
        posts:postsSlice
        /**
         * To store data in Redux during the loading or mounting of a component (such as posts), you can fetch the data once, put it into the Redux store, and then retrieve the data from the store for future renders. This avoids making multiple web requests each time the component renders.
         */
        ////Todo: add more slices here posts 

    }
})

export default store;
/**
 * state refers to the entire Redux store, which contains all the slices of state from different parts of your application.
 * 
 */
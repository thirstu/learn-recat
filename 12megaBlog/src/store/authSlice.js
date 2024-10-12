import { createSlice } from "@reduxjs/toolkit";


const initialState={
    status:false,
    userData:null,
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    //////reducers (login ,logout) changes current state of initialState to depending on what action is performed (logout) of what data we get by that action (login)
    reducers:{
        /////state = what data we have (store=which have all the slices like auth and posts slices), action =what data we get by that action 

        /**
 * state refers to the entire Redux store, which contains all the slices of state from different parts of your application.
 * 
 */
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;

        }
    }
});
export const {login,logout}=authSlice.actions;
export default authSlice.reducer;

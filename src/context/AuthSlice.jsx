import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "./localStorage";

const users = getLocalStorage();

const initialState={
    users,
    loggedInUser: null,
    isLoggedIn:false,
    role:null,
    error:null
}

const AuthSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        login:(state,action)=>{
            const { email, password } = action.payload;
            const user = state.users.find((user) => user.email === email);

            if(user){
                if(user.password===password){
                    state.loggedInUser=user;
                    state.isLoggedIn=true;
                    state.role= user.email.includes('admin')?'admin':'user';

                    localStorage.setItem('loggedInUserId', user.id);
                    localStorage.setItem('role', state.role);
                }
            }else{
                state.error="user not found";
            }
        },
        logout:(state)=>{
            state.loggedInUser=null;
            state.isLoggedIn=false;
            state.role=null;

            localStorage.removeItem('loggedInUserId');
            localStorage.removeItem('role');
        }
    }
})

export const {login,logout}= AuthSlice.actions;

export default AuthSlice.reducer;
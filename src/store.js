import { configureStore } from "@reduxjs/toolkit";
import authReducer from './context/AuthSlice'


export const store= configureStore({
    reducer:{
        user:authReducer
    },
})
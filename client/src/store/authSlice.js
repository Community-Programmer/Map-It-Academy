import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_BASE_URL from "../config/config";


const authSlice = createSlice({
    name: 'authData',
    initialState: {
        username: 'Guest',
        userId: '-',
        isLogin: false,
        error: null
    },

    extraReducers: builder =>{
        builder
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLogin = true;
            state.username = action.payload.username;
            state.userId = action.payload.userId;
        })
        .addCase(logoutUser.fulfilled, (state, action) => {
            state.isLogin = false;
            state.username = 'Guest';
        })

    }


});

export default authSlice.reducer;

export const loginUser = createAsyncThunk('auth/login', async (loginData) => {

    const response = await axios.post(`${API_BASE_URL}/auth/login`, loginData, {
        withCredentials: true
    });
    return response.data;

});

export const signupUser = createAsyncThunk('auth/signUp', async (signupData) => {

    const response = await axios.post(`${API_BASE_URL}/auth/signup`, signupData);
    return response.data;
})


export const logoutUser = createAsyncThunk('auth/logout', async ()=>{

    const response = await axios.get(`${API_BASE_URL}/auth/logout`,{
        withCredentials: true
    });

    return response.data;

})



import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API_BASE_URL from "../config/config";

const userSlice = createSlice({
    name: 'userData',
    initialState: {},

    extraReducers: builder => {
        builder
        .addCase(userData.fulfilled, (state, action) => {
            return { ...state, ...action.payload.userData };  
        })
    }
});


export default userSlice.reducer;

export const userData = createAsyncThunk('data/userData', async (userId) => {

    const response = await axios.get(`${API_BASE_URL}/user/data/${userId}`);
    return response.data;
})
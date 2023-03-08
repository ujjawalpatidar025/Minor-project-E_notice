import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

// Get user from localStorage

const saveUser = JSON.parse(localStorage.getItem('user'))


const initialState = {
    user : saveUser ? saveUser : null,
    isError : false,
    isLoading : false,
    isSuccess: false,
    message : "",
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        reset : (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ""
        }   
    },
    extraReducers : (builder) => {
        builder
        .addCase(login.pending , (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
        .addCase(login.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
            state.message = ""
            state.isError = false
        })
        .addCase(login.rejected , (state , action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(logout.fulfilled , (state)=>{
            state.user = null
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            
        })
       
    }
})



export const login = createAsyncThunk('/signin' , async(userData , thunkAPI)=>{

    try {
        return await authService.login(userData)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})




export const logout = createAsyncThunk("/signout" , async(thunkAPI)=>{
   
   try {
    await authService.logout()
} catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message) 
}
})


export const {reset} = authSlice.actions
export default authSlice.reducer

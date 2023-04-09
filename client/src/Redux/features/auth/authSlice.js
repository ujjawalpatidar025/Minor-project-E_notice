import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";


// const saveUser = JSON.parse(localStorage.getItem('user'))


const initialState = {
    user : null,
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
            state.user=null
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
            state.message=""
        })
        .addCase(login.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload.others
            state.message = action.payload.message
            state.isError = false
        })
        .addCase(login.rejected , (state , action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(logout.fulfilled , (state, action)=>{
            state.user = null
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message=action.payload.message
        })
        .addCase(isAuthenticated.pending, (state)=>{
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
            state.message=""
        })
        .addCase(isAuthenticated.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload.userdata
            state.message = ""
            state.isError = false
        })
        .addCase(isAuthenticated.rejected , (state , action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.message = ""
            state.user = null
        })

       
    }
})



export const login = createAsyncThunk('/signin' , async(userData , thunkAPI)=>{

    try {
        const response= await authService.login(userData);
        return response;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})




export const logout = createAsyncThunk("/signout" , async(thunkAPI)=>{
   
   try {
    return await authService.logout()
} catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message) 
}
})

export const isAuthenticated = createAsyncThunk("/isAuthenticated" , async(thunkAPI)=>{
   
    try {
     return await authService.isAuthenticated();
 } catch (error) {
     const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
     return thunkAPI.rejectWithValue(message) 
 }
 })




export const {reset} = authSlice.actions
export default authSlice.reducer

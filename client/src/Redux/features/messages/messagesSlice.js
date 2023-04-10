import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import messageService from "./messageService";




const initialState = {
    noticeMessages:"",
    isMessageError : false,
    isMessageLoading : false,
    isMessageSuccess: false,
    message:""
}

const messageSlice = createSlice({
    name : "messages",
    initialState,
    reducers : {
        reset : (state) => {
            state.noticeMessages=""
            state.isMessageError = false
            state.isMessageLoading = false
            state.isMessageSuccess= false
            state.message=""
        }   
    },
    extraReducers : (builder) => {
        builder
        .addCase(getMessages.pending , (state)=>{
            state.isMessageError = false
            state.isMessageLoading = true
            state.isMessageSuccess= false
            state.message=""
        })
        .addCase(getMessages.fulfilled , (state , action)=>{
            state.noticeMessages=action.payload.allMessages
            state.isMessageError = false
            state.isMessageLoading = false
            state.isMessageSuccess= true
            state.message=""
        })
        .addCase(getMessages.rejected , (state, action)=>{
            state.isMessageError = true
            state.isMessageLoading = false
            state.isMessageSuccess= false
            state.message=action.payload.message
        })
        .addCase(deleteMessages.pending , (state)=>{
            state.isMessageError = false
            state.isMessageLoading = true
            state.isMessageSuccess= false
            state.message=""
        })
        .addCase(deleteMessages.fulfilled , (state , action)=>{
            state.isMessageError = false
            state.isMessageLoading = false
            state.isMessageSuccess= true
            state.message=action.payload.message
        })
        .addCase(deleteMessages.rejected , (state, action)=>{
            state.isMessageError = true
            state.isMessageLoading = false
            state.isMessageSuccess= false
            state.message=action.payload.message
        })
        .addCase(createMessages.pending , (state)=>{
            state.isMessageError = false
            state.isMessageLoading = true
            state.isMessageSuccess= false
            state.message=""
        })
        .addCase(createMessages.fulfilled , (state , action)=>{
            state.isMessageError = false
            state.isMessageLoading = false
            state.isMessageSuccess= true
            state.message=action.payload.message
        })
        .addCase(createMessages.rejected , (state, action)=>{
            state.isMessageError = true
            state.isMessageLoading = false
            state.isMessageSuccess= false
            state.message=action.payload.message
        })
       
    }
})


export const createMessages = createAsyncThunk('/crtMessages' , async(messageData, thunkAPI)=>{

    try {
        return await messageService.createMessages(messageData)
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})



export const getMessages = createAsyncThunk('/getMessages' , async(thunkAPI)=>{

    try {
        return await messageService.getMessages()
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})


export const deleteMessages = createAsyncThunk('/deleteMessages' , async(messageId, thunkAPI)=>{

    try {
        return await messageService.deleteMessage(messageId)
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})









export const {reset} = messageSlice.actions
export default messageSlice.reducer

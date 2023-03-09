import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import messageService from "./messageService";




const initialState = {
    noticeMessages:"",
    isMessageError : false,
    isMessageLoading : false,
    isMessageSuccess: false,
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
        }   
    },
    extraReducers : (builder) => {
        builder
        .addCase(allMessages.pending , (state)=>{
            state.noticeMessages=""
            state.isMessageError = false
            state.isMessageLoading = true
            state.isMessageSuccess= false
        })
        .addCase(allMessages.fulfilled , (state , action)=>{
            state.noticeMessages=action.payload
            state.isMessageError = false
            state.isMessageLoading = false
            state.isMessageSuccess= true
        })
        .addCase(allMessages.rejected , (state)=>{
            state.noticeMessages=""
            state.isMessageError = true
            state.isMessageLoading = false
            state.isMessageSuccess= false
        })
        .addCase(iistMessages.pending , (state)=>{
            state.noticeMessages=""
            state.isMessageError = false
            state.isMessageLoading = true
            state.isMessageSuccess= false
        })
        .addCase(iistMessages.fulfilled , (state , action)=>{
            state.noticeMessages=action.payload
            state.isMessageError = false
            state.isMessageLoading = false
            state.isMessageSuccess= true
        })
        .addCase(iistMessages.rejected , (state)=>{
            state.noticeMessages=""
            state.isMessageError = true
            state.isMessageLoading = false
            state.isMessageSuccess= false
        }).addCase(iipMessages.pending , (state)=>{
            state.noticeMessages=""
            state.isMessageError = false
            state.isMessageLoading = true
            state.isMessageSuccess= false
        })
        .addCase(iipMessages.fulfilled , (state , action)=>{
            state.noticeMessages=action.payload
            state.isMessageError = false
            state.isMessageLoading = false
            state.isMessageSuccess= true
        })
        .addCase(iipMessages.rejected , (state)=>{
            state.noticeMessages=""
            state.isMessageError = true
            state.isMessageLoading = false
            state.isMessageSuccess= false
        }).addCase(iimrMessages.pending , (state)=>{
            state.noticeMessages=""
            state.isMessageError = false
            state.isMessageLoading = true
            state.isMessageSuccess= false
        })
        .addCase(iimrMessages.fulfilled , (state , action)=>{
            state.noticeMessages=action.payload
            state.isMessageError = false
            state.isMessageLoading = false
            state.isMessageSuccess= true
        })
        .addCase(iimrMessages.rejected , (state)=>{
            state.noticeMessages=""
            state.isMessageError = true
            state.isMessageLoading = false
            state.isMessageSuccess= false
        })
       
    }
})



export const allMessages = createAsyncThunk('/getMessages/ALL' , async(thunkAPI)=>{

    try {
        return await messageService.getAllMessages()
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})
export const iipMessages = createAsyncThunk('/getMessages/IIP' , async(thunkAPI)=>{

    try {
        return await messageService.getIIPMessages()
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})
export const iistMessages = createAsyncThunk('/getMessages/IIST' , async(thunkAPI)=>{

    try {
        return await messageService.getIISTMessages()
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})
export const iimrMessages = createAsyncThunk('/getMessages/IIMR' , async(thunkAPI)=>{

    try {
        return await messageService.getIIMRMessages()
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})


export const deleteMessages = createAsyncThunk('/deleteMessages' , async(id, thunkAPI)=>{

    try {
        return await messageService.deleteMessage(id)
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})









export const {reset} = messageSlice.actions
export default messageSlice.reducer

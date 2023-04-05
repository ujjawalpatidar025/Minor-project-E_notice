import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import queriesService from "./queriesService";




const initialState = {
    allQueries:"",
    getQuery:"",
    isQueryError : false,
    isQueryLoading : false,
    isQuerySuccess: false,
}

const queriesSlice = createSlice({
    name : "queries",
    initialState,
    reducers : {
        reset : (state) => {
            state.allQueries=""
            state.getQuery=""
            state.isQueryError = false
            state.isQueryLoading = false
            state.isQuerySuccess= false
        }   
    },
    extraReducers : (builder) => {
        builder
        .addCase(getQueries.pending , (state)=>{
            state.allQueries=""
            state.isQueryError = false
            state.isQueryLoading = true
            state.isQuerySuccess= false
        })
        .addCase(getQueries.fulfilled , (state , action)=>{
            state.allQueries=action.payload
            state.isQueryError = false
            state.isQueryLoading = false
            state.isQuerySuccess= true
        })
        .addCase(getQueries.rejected , (state)=>{
            state.allQueries=""
            state.isQueryError = true
            state.isQueryLoading = false
            state.isQuerySuccess= false
        })
        .addCase(getSpecificQuery.pending , (state)=>{
            state.getQuery=""
            state.isQueryError = false
            state.isQueryLoading = true
            state.isQuerySuccess= false
        })
        .addCase(getSpecificQuery.fulfilled , (state , action)=>{
            state.getQuery=action.payload
            state.isQueryError = false
            state.isQueryLoading = false
            state.isQuerySuccess= true
        })
        .addCase(getSpecificQuery.rejected , (state)=>{
            state.getQuery=""
            state.isQueryError = true
            state.isQueryLoading = false
            state.isQuerySuccess= false
        })
       
    }
})



export const getQueries = createAsyncThunk('/getQueries/' , async(thunkAPI)=>{

    try {
        return await queriesService.getAllQueries()
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})
export const getSpecificQuery=createAsyncThunk('/getQuery/' , async(id, thunkAPI)=>{

    try {
        console.log(id)
        return await queriesService.getSpecificQuery(id)
        
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message) 
    }

})


// export const deleteMessages = createAsyncThunk('/deleteMessages' , async(id, thunkAPI)=>{

//     try {
//         return await messageService.deleteMessage(id)
        
//     } catch (error) {
//         const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
//         return thunkAPI.rejectWithValue(message) 
//     }

// })









export const {reset} = queriesSlice.actions
export default queriesSlice.reducer

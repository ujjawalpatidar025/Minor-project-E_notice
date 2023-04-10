import axios from 'axios'

// const API_URL = 'http://localhost:4000';





const getAllMessages = async() => {
    
    const response = await axios.get('/getMessages/ALL')
    // console.log(response);
    return response.data
}

const getIISTMessages = async() => {
    
    const response = await axios.get('/getMessages/IIST')
    return response.data
}
const getIIPMessages = async() => {
    
    const response = await axios.get('/getMessages/IIP')
    return response.data
}
const getIIMRMessages = async() => {
    
    const response = await axios.get('/getMessages/IIMR')
    return response.data
}


const deleteMessage=async(id)=>{
    const response=await axios.put(`/messages/delMessages/${id}`)
    return response.data;
}

const getMessages=async()=>{
    const response = await axios.get(`/messages/getMessages`);
    return response.data;
}


const createMessages=async(messageData)=>{
    const response = await axios.post(`/messages/crtMessages`, messageData);
    return response.data;
}
const messageService = {
    getIIMRMessages,
    getIIPMessages,
    getIISTMessages,
    getAllMessages,
    deleteMessage,
    getMessages,
    createMessages
}

export default messageService
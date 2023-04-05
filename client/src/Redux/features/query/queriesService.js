import axios from 'axios'

// const API_URL = 'http://localhost:4000';





const getAllQueries = async() => {
    
    const response = await axios.get('/getquery')
    return response.data
}

const getSpecificQuery =async(id)=>{
    console.log(id)
    const response=await axios.get(`/getquery/${id}`)
    return response.data
}




// const deleteMessage=async(id)=>{
//     const response=await axios.put(`/delMessages/${id}`)
//     console.log(response.data);
//     return response.data;
// }

const queriesService = {
    getAllQueries,
    getSpecificQuery
}

export default queriesService
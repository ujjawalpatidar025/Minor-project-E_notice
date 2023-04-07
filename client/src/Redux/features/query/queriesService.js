import axios from 'axios'

// const API_URL = 'http://localhost:4000';





const getAllQueries = async() => {
    
    const response = await axios.get('/getquery')
    return response.data
}

const getSpecificQuery =async(id)=>{
    const response=await axios.get(`/getquery/${id}`)
    return response.data
}

const crtQuerySolution=async(d)=>{
    const response=await axios.post(`/crtquerysolution/${d.id}`, d);
    return response.data
}
const crtQuery =async(data)=>{
    const response=await axios.post(`/crtquery`, {query: data});
    return response.data
}




const deleteQuery=async(id)=>{
    const response=await axios.put(`/delQuery/${id}`)
    return response.data;
}

const queriesService = {
    getAllQueries,
    getSpecificQuery,
    crtQuerySolution,
    crtQuery,
    deleteQuery
}

export default queriesService
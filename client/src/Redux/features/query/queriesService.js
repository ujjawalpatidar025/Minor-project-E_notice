import axios from 'axios'

// const API_URL = 'http://localhost:4000';





const getAllQueries = async() => {
    
    const response = await axios.get('/queries/')
    return response.data
}

const getSpecificQuery =async(id)=>{
    const response=await axios.get(`/queries/${id}`)
    return response.data
}

const crtQuerySolution=async(d)=>{
    const response=await axios.post(`/queries/crtquerysolution/${d.id}`, d);
    return response.data
}
const crtQuery =async(data)=>{
    const response=await axios.post(`/queries/crtQuery`, {query: data});
    return response.data
}




const deleteQuery=async(itemId)=>{
    const response=await axios.put(`/queries/delQuery/${itemId}`)
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
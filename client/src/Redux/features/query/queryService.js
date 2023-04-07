import axios from 'axios'

// const API_URL = 'http://localhost:4000';





const getAllQuery = async() => {
    
    const response = await axios.get('/getquery/')
    // console.log(response);
    return response.data
}


const deleteQuery=async(id)=>{
    const response=await axios.put(`/delquery/${id}`)
    
    return response.data;
}

const queryService = {
    getAllQuery,
    deleteQuery
   
}

export default queryService
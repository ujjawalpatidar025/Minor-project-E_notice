import axios from 'axios'

// const API_URL = 'http://localhost:4000';





const login = async(userData) => {
    
    const response = await axios.post('/auth/signin' , userData)
    return response.data
 }


 


const logout = async () =>{ 
    const response=await axios.put('/auth/signout');
    window.location.pathname='/';
    return response.data;
}

const isAuthenticated=async()=>{
    const response=await axios.get('/auth/isAuthenticated');
    return response.data;
}

const authService = {
    login,
    logout,
    isAuthenticated
}

export default authService
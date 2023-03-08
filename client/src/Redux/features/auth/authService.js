import axios from 'axios'

// const API_URL = 'http://localhost:4000';





const login = async(userData) => {
    
    const response = await axios.post('/signin' , userData)
    if(response.data){
     localStorage.setItem('user' , JSON.stringify( response.data));
    }
 
    return response.data
 }


 


const logout = async () =>{ 
   await axios.get('/signout');
    localStorage.clear();
    window.location.pathname='/';
}



const authService = {
    login,
    logout,
}

export default authService
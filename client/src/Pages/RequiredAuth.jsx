import axios from 'axios'
import React, { Children, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { isLoginError, isLoginSuccess } from '../Redux/Slices/userSlice';


const RequiredAuth = ({children}) => {
  const {loginSuccess, ...others}=useSelector((state)=> state.user)
  const dispatch=useDispatch();
  
  useEffect( ()=>{
    async function fetchData() {
      try {
        const res = await axios.get("/verifyToken");
        // console.log(res.data.loggedIn)
        if (res.data.loggedIn) {
          dispatch(isLoginSuccess());
        }else{
          dispatch(isLoginError());

        }
      } catch (err) {
        dispatch(isLoginError());
      }
    }
    fetchData();
  },[dispatch])
  return (
     loginSuccess? children : <></>
       
  )
  
}

export default RequiredAuth;
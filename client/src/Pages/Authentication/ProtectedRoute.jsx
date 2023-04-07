import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import {Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

import LoadingPage from './LoadingPage';


const ProtectedRoute = () => {
    const navigate=useNavigate();
    const [showProp, setShowLoading] =useState(true);
    useEffect(() => {
      async function verify(){
        try{
            const isVerify=await axios.get('/verifyToken');
            setTimeout(() => {
              isVerify && setShowLoading(false);
            }, 2000);
            if(!verify.data && (window.location.pathname==='/' )) navigate('/home');
        }catch(error){
          setShowLoading(false)
            navigate('/');
            localStorage.clear();
        }
      }
      verify();
    }, [])
  return (
    showProp ? 
    <LoadingPage/> :
      window.location.pathname!=='/'? <><Navbar/><Outlet/></>: <Outlet/>
    )
}

export default ProtectedRoute
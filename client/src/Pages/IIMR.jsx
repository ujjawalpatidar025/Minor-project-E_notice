
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabBar from '../Components/TabBar';
import { useDispatch, useSelector } from 'react-redux';





const IIMR = () => {

  const { noticeMessages } = useSelector((state) => state.messages);

  

  return (
    <div style={{padding:'0 30px'}}>
  

      <Typography variant='h4' color='primary' sx={{height:'5rem',padding:'20px',display: 'flex', alignItems: 'center',color:"rgb(33 109 48)" }}> IIMR Messages</Typography>
      <TabBar noticeMessages={Object.values(noticeMessages).filter((messages)=>messages.institute==="IIMR")}/>
      

      
    </div>
  )
}

export default IIMR;
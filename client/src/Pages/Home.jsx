
import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import TabBar from '../Components/TabBar';
import { useSelector } from 'react-redux';



const Home = () => {
  
  const { noticeMessages } = useSelector((state) => state.messages);
 
  

  return (
    <div style={{padding:'0 30px'}}>
  

      <Typography variant='h4' color='primary' sx={{height:'5rem',padding:'20px' ,display: 'flex', alignItems: 'center', color:"rgb(33 109 48)"}}> All Messages</Typography>
      <TabBar noticeMessages={Object.values(noticeMessages).filter((messages)=>messages)}/>
      

      
    </div>
  )
}

export default Home;
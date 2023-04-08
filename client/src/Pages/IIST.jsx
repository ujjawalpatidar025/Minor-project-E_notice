
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabBar from '../Components/TabBar';
import { useDispatch } from 'react-redux';
import { iistMessages } from '../Redux/features/messages/messageSlice';





const IIST = () => {

  const dispatch=useDispatch();

  useEffect(() => {
    console.log("iist")
    dispatch(iistMessages());
  }, [])
  

  return (
    <div style={{padding:'0 30px'}}>
  

      <Typography variant='h4' color='primary' sx={{height:'5rem',padding:'20px' ,display: 'flex', alignItems: 'center',color:"rgb(33 109 48)"}}> IIST Messages</Typography>
      <TabBar/>
      

      
    </div>
  )
}

export default IIST;
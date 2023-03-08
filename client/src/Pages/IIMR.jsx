
import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabBar from '../Components/TabBar';
import { useDispatch } from 'react-redux';
import { iimrMessages } from '../Redux/features/messages/messageSlice';




const IIMR = () => {

  const dispatch=useDispatch();

  useEffect(() => {
    console.log("iimr")
    dispatch(iimrMessages());
  }, [])
  

  return (
    <div>
  

      <Typography variant='h4' color='primary' sx={{height:'5rem',padding:'20px',display: 'flex', alignItems: 'center' }}> IIMR Messages</Typography>
      <TabBar/>
      

      
    </div>
  )
}

export default IIMR;
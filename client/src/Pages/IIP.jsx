
import React from 'react'
import Navbar from '../Components/Navbar'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabBar from '../Components/TabBar';
import Layout from './Layout';




const IIP = () => {

  

  return (
    <div>
  

      <Typography variant='h4' color='primary' sx={{height:'5rem',padding:'20px' }}> IIP Messages</Typography>
      <TabBar/>
      

      
    </div>
  )
}

export default IIP;
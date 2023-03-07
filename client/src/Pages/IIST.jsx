
import React from 'react'
import Navbar from '../Components/Navbar'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabBar from '../Components/TabBar';
import Layout from './Layout';




const IIST = () => {

  

  return (
    <div>
  

      <Typography variant='h4' color='primary' sx={{height:'5rem',padding:'20px' ,display: 'flex', alignItems: 'center'}}> IIST Messages</Typography>
      <TabBar/>
      

      
    </div>
  )
}

export default IIST;
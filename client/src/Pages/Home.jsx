
import React from 'react'
import Navbar from '../Components/Navbar'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabBar from '../Components/TabBar';


const Home = () => {

  return (
    <div>
      <Navbar/>

      <Typography variant='h4' color='primary' sx={{height:'5rem',padding:'20px' }}> All Messages</Typography>
      <TabBar/>

      
    </div>
  )
}

export default Home;
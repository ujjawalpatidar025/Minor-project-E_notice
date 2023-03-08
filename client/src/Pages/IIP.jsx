
import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabBar from '../Components/TabBar';




const IIP = () => {

  

  return (
    <div>
  

      <Typography variant='h4' color='primary' sx={{height:'5rem',padding:'20px' ,display: 'flex', alignItems: 'center'}}> IIP Messages</Typography>
      <TabBar/>
      

      
    </div>
  )
}

export default IIP;
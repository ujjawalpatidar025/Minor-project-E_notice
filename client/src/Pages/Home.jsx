
import React from 'react'
import Typography from '@mui/material/Typography';
import TabBar from '../Components/TabBar';




const Home = () => {

  

  return (
    <div>
  

      <Typography variant='h4' color='primary' sx={{height:'5rem',padding:'20px' ,display: 'flex', alignItems: 'center'}}> All Messages</Typography>
      <TabBar/>
      

      
    </div>
  )
}

export default Home;
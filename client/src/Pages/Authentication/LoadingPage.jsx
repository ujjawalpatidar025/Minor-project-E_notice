import { Typography } from '@mui/material'
import React from 'react'
import Typewriter from 'typewriter-effect';

const LoadingPage = () => {
  return (
    <div style={{display:'flex',  flexDirection:'column',justifyContent:'center',  backgroundSize:'cover', backgroundRepeat:'none', alignItems:'center', width:'100%', height:'100vh', color:'black'}}>
      <Typography component="h2" variant="h3" color="black" gutterBottom>
      <Typewriter
  options={{
    strings: ['Loading...'],
    autoStart: true,
    loop: true,
  }}
/></Typography>
    </div>
  )
}

export default LoadingPage
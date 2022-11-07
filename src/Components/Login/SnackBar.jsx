import React from 'react'

import NoticeBox from '../Common/NoticeBox';
import { Close } from '@material-ui/icons';

const style={
  success:{
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    zIndex:'1000000',
    bottom: '2rem',
    left:'2rem',
    width: '300px',
    cursor: 'pointer',
    color: '#ffffff',
    backgroundColor: 'rgb(14, 91, 136)',
    padding: '1rem',
  },

  
}
const closeSuccessMsg=()=>{
  document.getElementById('success-msg').style.display='none';
}


function SnackBar({success}) {
  return (
    <>
      {
      setTimeout(() => {
        const box = document.getElementById("success-msg");
        box.style.display = "none"; 
      }, 1000)
      }

      {/* <div className='outer' style={style.outer}> */}
      <div className='success-msg' id='success-msg' style={style.success}>{success} <Close onClick={closeSuccessMsg}/> </div>
      {/* </div> */}
    </>

  );
}

export default SnackBar
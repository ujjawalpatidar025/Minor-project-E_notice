import React, {useContext, useEffect}from 'react';
import { Close } from '@material-ui/icons';
import { SuccessContext } from './SuccessProvider';

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
    backgroundColor: '#602f8edc ',
    padding: '1rem',
  },

  
}
const closeSuccessMsg=()=>{
  document.getElementById('success-msg').style.display='none';
}


function SnackBar() {
  const [isLogin,setIsLogin, openAdd, setOpenAdd, openSnackBar, setOpenSnackBar,count, setCount]=useContext(SuccessContext);

  return (
    <>
      {
      useEffect(() => {
        
        setTimeout(() => {
          const box = document.getElementById("success-msg");
          box.style.display = "none"; 
          setCount(1);
        }, 5000)
      }, [])
      
      }

     
      <div className='success-msg' id='success-msg' style={style.success}>Login Successful<Close onClick={closeSuccessMsg}/> </div>
      {/* </div> */}
    </>

  );
}

export default SnackBar;
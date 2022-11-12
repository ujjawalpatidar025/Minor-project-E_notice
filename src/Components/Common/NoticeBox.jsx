import React, { useContext, useEffect } from 'react'
import Accordian from './Accordian.jsx';
import './NoticeBox.css';
import SnackBar from '../Login/SnackBar.jsx';
import { SuccessContext } from '../Login/SuccessProvider.jsx';

// c;
const NoticeBox = () => {
  const [isLogin,setIsLogin, openAdd, setOpenAdd, openSnackBar, setOpenSnackBar,count, setCount]=useContext(SuccessContext);
  return (
    <>
    {
      (isLogin && count===0)? <SnackBar/>: null
    }
    {
      console.log(count)
    }
    {/* {
      (openSnackBar? setCount(count+1): setCount(0)) */}
      {/* // (count===3? setCount(count-1): null) */}
    {/* } */}
    {/* {
      setCount===1? <SnackBar/>:null
    } */}
    {/* <div className='notice_box'> */}

      {/* <div className="notice_box_updation">

      </div>
      <div className="accordian_box">
      <Accordian/>
      <Accordian/>
      <Accordian/>
      <Accordian/>
      <Accordian/>
      <Accordian/>
      <Accordian/>
      <Accordian/>
      <Accordian/>
      <Accordian/>
      <Accordian/>
      <Accordian/>
      <Accordian/>
      </div>
      
    </div> */}
    </>

  )
}

export default NoticeBox
import React, { useContext } from 'react'
import Accordian from './Accordian.jsx';
import './NoticeBox.css';
import SnackBar from '../Login/SnackBar.jsx';
import { SuccessContext } from '../Login/SuccessProvider.jsx';

// c;
const NoticeBox = ({loginSuccess}) => {
  const [val, setSuccess]=useContext(SuccessContext);
  return (
    <>
    {val&&<SnackBar/>}
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
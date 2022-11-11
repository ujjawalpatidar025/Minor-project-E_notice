import React, { useContext } from 'react'
import Accordian from './Accordian.jsx';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import FilterListIcon from '@material-ui/icons/FilterList';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

import './NoticeBox.css';
import SnackBar from '../Login/SnackBar.jsx';
import { SuccessContext } from '../Login/SuccessProvider.jsx';

// c;
const NoticeBox = () => {

  const [isLogin, setIsLogin]=useContext(SuccessContext);

  return (
    <>
    {isLogin&&<SnackBar/>}
    


    <div className='notice_box'>

      <div className="notice_box_updation">
        <div className='notice_left'><DoubleArrowIcon className='arrow_notifier'/>
        <h3>Academic Notices</h3></div>
       
        <div className='notice_right'>
        <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
        <FilterListIcon className='right_icon'/>
        <DeleteIcon className='right_icon'/>
        </div>
        </div>
        </div>
        

    </>

  )
}

export default NoticeBox;
import React from 'react'
import './Addnoticepage.css';
import Close from '@material-ui/icons/Close';

const Addnoticepage=() =>{
    const off = () => {
        document.getElementById('addNoticeBox').style.display = 'none';
    }
  return (
    <>
      <div className='add-Notice-box' id='addNoticeBox'>
        <Close onClick={off}/>
           <h1>Hello</h1>
      </div>

    </>
  )
}

export default Addnoticepage
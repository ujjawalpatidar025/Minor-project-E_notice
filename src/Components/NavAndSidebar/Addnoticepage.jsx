import React from 'react';
import Button from '@material-ui/core/Button';
import { InputLabel, Link } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import { makeStyles } from '@mui/material';
import {makeStyles } from '@material-ui/core/styles';

import'./Addnoticepage.css';
import { useContext } from 'react';
import { SuccessContext } from '../Login/SuccessProvider';

const categories = [
    {
      value: 'All',
      label: 'All',
    },
    {
      value: 'Academic',
      label: 'Academic',
    },
    {
      value: 'Social',
      label: 'Social',
    },
    {
      value: 'Culture',
      label: 'Culture',
    },
  ];
  const institutes = [
    {
      value: 'IIST',
      label: 'IIST',
    },
    {
      value: 'IIP',
      label: 'IIP',
    },
    {
      value: 'IIM',
      label: 'IIM',
    },
  ];

const useStyles=makeStyles((theme)=>({
    rootForm: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
}));
const Addnoticepage=()=> {
    const classes=useStyles();
    const [isLogin,setIsLogin,openAdd, setOpenAdd]=useContext(SuccessContext);
    const off = () => {
         setOpenAdd(false);
    };
  return (
    <>
    {openAdd&&<div className="add-Notice-box" id="addNoticeBoxes">
        <div className="notice-box">
          <div className="addnotice-heading">
            <h1>Add Notice</h1>
            <Close onClick={off} style={{cursor:'pointer'}} />
          </div>
          <div className="notice-form-section">
            <form noValidate className={classes.rootForm} autoComplete="off">
              <div className='notice-form-input'>
              <TextField id="institute" select label="Select Institute">
              {institutes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField id="branch" label="Enter Branch" required />
              <TextField id="organization" label="Enter Organization" />
              <TextField id="cateogory" select label="Select Category">
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField id="title" label="Title" />
              <TextField id="subtitle" label="Sub Title" />
              </div>
              <div className='textarea-my'>
              <TextField id="outlined-multiline-static"  label="Write Message" multiline rows={5}/>
              </div>
              <div className='upload-input'>
                <InputLabel>Upload Image/Video</InputLabel>
                <input id="choose image/video"  type='file'/>
              </div>
              <div className='add-notice'>
              <Button type='submit' variant="contained" color="primary" className="submitbtn">
                 Add Notice
               </Button>
              </div>
            
            
            </form>
          </div>
        </div>
        </div>}
        </>
    
  )
}

export default Addnoticepage;
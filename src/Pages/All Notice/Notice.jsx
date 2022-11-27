import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavLink } from 'react-router-dom';
import './Notice.css';
import { Link , useNavigate, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Notice() {
  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  let history = useNavigate();
  const handleLinkChangeIIP=()=>{
    if(location.pathname==='/home/iist' || location.pathname==='/home/iimr'){
      history('/home/iip');
    }else if(location.pathname==='/academic/iist' || location.pathname==='/academic/iimr' ){
      history('/academic/iip');
    }else if(location.pathname==='/social/iist' || location.pathname==='/social/iimr' ){
      history('/social/iip');
    }else if(location.pathname==='/community/iist' || location.pathname==='/community/iimr' ){
      history('/community/iip');
    }else if(location.pathname==='/spam/iist' || location.pathname==='/spam/iimr' ){
      history('/spam/iip');
    }
  }
  const handleLinkChangeIIM=()=>{
    if(location.pathname==='/home/iip' || location.pathname==='/home/iist'){
      history('/home/iimr');
    }else if(location.pathname==='/academic/iip' || location.pathname==='/academic/iist' ){
      history('/academic/iimr');
    }else if(location.pathname==='/social/iip' || location.pathname==='/social/iist' ){
      history('/social/iimr');
    }else if(location.pathname==='/community/iip' || location.pathname==='/community/iist' ){
      history('/community/iimr');
    }else if(location.pathname==='/spam/iip' || location.pathname==='/spam/iim' ){
      history('/spam/iimr');
    }

  }
  const handleLinkChangeIIST=()=>{
    if(location.pathname==='/home/iip' || location.pathname==='/home/iimr'){
      history('/home/iist');
    }else if(location.pathname==='/academic/iip' || location.pathname==='/academic/iimr' ){
      history('/academic/iist');
    }else if(location.pathname==='/social/iip' || location.pathname==='/social/iimr' ){
      history('/social/iist');
    }else if(location.pathname==='/community/iip' || location.pathname==='/community/iimr' ){
      history('/community/iist');
    }else if(location.pathname==='/spam/iip' || location.pathname==='/spam/iimr' ){
      history('/spam/iist');
    }

  }

  return (
    <div className='notice_main'>
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
       <Tab label="IIST" onClick={handleLinkChangeIIST}  className='sector'/>
      
       <Tab label="IIP" onClick={handleLinkChangeIIP}  className='sector' />
        <Tab label="IIMR" onClick={handleLinkChangeIIM}  className='sector'  />
      </Tabs>
    </Paper>
    </div>
  );
}

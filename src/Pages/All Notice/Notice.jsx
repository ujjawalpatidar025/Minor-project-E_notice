import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NavLink } from 'react-router-dom';
import './Notice.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Notice() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
       <Tab label="IIST" onClick="/home/iist"  className='sector'/>
      
       <Tab label="IIP" onClick="/home/iip"  className='sector' />
        <Tab label="IIMR"  className='sector'  />
      </Tabs>
    </Paper>
    </div>
  );
}
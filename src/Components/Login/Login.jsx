import React from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Login_Image from '../Images/Login_Image.jpg';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import './Login.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: '25ch',
    },
  }));


  
 
   

const Login = () => {
    const classes = useStyles();
  
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
  return (
    <div className='login'>
       
       <div className="login_box">
        
        <div className="login_form">
        <h2>Admin Login</h2>
        
          <div className="login_main_form">
            <div>
            <div className="username"><TextField id="outlined-basic" label="Username" variant="outlined" /></div>
          <div className="password"><TextField id="outlined-basic" label="Password" variant="outlined" /></div>
          </div>
          
          </div>
        
        </div>
        
        <img src={Login_Image}></img>
        

       </div>
        

    </div>
  )
}

export default Login;

import React from 'react'
import loginBackground from '../Images/loginBackground.jpeg';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '70%',
    },
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop:'2rem'
  },
}));
  
 
   

const Login = () => {
    const classes = useStyles();
  
    const [values, setValues] = React.useState({
      email: '',
      password: '',
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
    <div className="login">
      <div className="login_box">
        <div className="login_form">
          <div className='heading-login'><AccountCircleIcon />
          <h1>Admin Login</h1></div>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Email" />
            <TextField id="standard-basic" label="Password" />
            <Button variant="contained" color="primary" className='submitbtn'>
              LOGIN
            </Button>
          </form>
        </div>
        <img src={loginBackground}></img>
      </div>
    </div>
  );
}

export default Login;

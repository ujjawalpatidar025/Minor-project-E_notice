import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import iistImg from '../../Images/iistImg.jpg'
import { Collapse } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/features/auth/authSlice';
import LoadingPage from './LoadingPage';



const theme = createTheme();

export default function LoginPage() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {isSuccess, isError, isLoading, message, user}=useSelector((state)=> state.auth);

  const[check, setChecked]=useState(false);
  
  
  useEffect(()=>{
     setChecked(true);
  }, [])


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userData));
  };




  return (
     <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            width: "100%",
            backgroundImage: `url(${iistImg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              maxWidth: "100%",
              height: "100%",
              backgroundColor: "hsl(229deg 15% 10% / 79%)",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Collapse
              in={check}
              {...(check ? { timeout: 2000 } : {})}
              className="collapse-div"
            >
              <Box className="content-text" sx={{ color: "#eee" }}>
                <h1>WELCOME!</h1>
                <h2 style={{ color: "#5dff7d" }}>
                  Indore Institute Academic Information Portal
                </h2>
              </Box>
            </Collapse>
          </Box>
        </Grid>

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "rgb(33 109 48)" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  "& label.Mui-focused": {
                    color: "rgb(33 109 48)",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "rgb(33 109 48)",
                  },

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgb(33 109 48)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgb(33 109 48)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(33 109 48)",
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  "& label.Mui-focused": {
                    color: "rgb(33 109 48)",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "rgb(33 109 48)",
                  },

                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgb(33 109 48)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgb(33 109 48)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(33 109 48)",
                    },
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "rgb(33 109 48)",
                  "&:hover": {
                    backgroundColor: "rgb(33 109 48)",
                    borderColor: "#0062cc",
                    boxShadow: "none",
                  },
                  "&:active": {
                    boxShadow: "none",
                    backgroundColor: "rgb(33 109 48)",
                    borderColor: "rgb(33 109 48)",
                  },
                  "&:focus": {
                    boxShadow: "0 0 0 0.2rem rgb(33 109 48)",
                  },
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" color={"rgb(33 109 48)"} >
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              {isError&&<Grid
                item
                sx={{
                  marginTop: "20px",
                  padding: "5px",
                  display: "flex",
                  boxShadow: "2px 2px 1px grey",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box color={"red"}>{message}</Box>
              </Grid>}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
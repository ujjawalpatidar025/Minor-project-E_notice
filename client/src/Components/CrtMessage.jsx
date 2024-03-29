import * as React from 'react';
import { MenuItem } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import axios from 'axios';
// import { useLocation } from 'react-router-dom';

import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { createMessages } from '../Redux/features/messages/messagesSlice';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function CrtMessage() {
    const dispatch=useDispatch();
    const {message}=useSelector((state)=>state.messages)
    const categoryDB = [
        "Notebook",
        "Desktop PC",
        "Monitor"
    ]
    const [info, setinfo] = useState({
        heading: "",
        subheading: "",
        institute: "",
        batchYear: "",
        category: "",
        message: ""

    })

    const [open, setOpen] = React.useState(false);
    const navigate=useNavigate();

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    

    const setval = (e) => {
        const { name, value } = e.target;
        setinfo(() => {
            return {
                ...info,
                [name]: value
            }
        })
    }
    
    const[successMessage, setSuccessMessage]=useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
        const createNoticeData= {
            heading: data.get('heading'),
            subHeading:data.get('subHeading'),
            batchYear: data.get('batchYear'),
            message:data.get('message'),
            category:data.get('category'),
            institute:data.get('institute'),
        }
        dispatch(createMessages(createNoticeData));
       
        alert("Message created!")
        window.location.href="/";

        // try{
        //     axios.defaults.withCredentials=true;
        //     // console.log(createMessage);
        //     const response=await axios.post('/crtMessages', createMessage);
           
        //     setSuccessMessage(JSON.stringify((response.data)));
        //     setOpen(true);
        


        //     //navigate('/home');
        //     //alert(JSON.stringify((response.data)));
        //     // console.log(`${JSON.stringify((response.data))}`);
        // }catch(error){
        //     setSuccessMessage(error.response.data.message);
        //    console.log(error.response.data.message);
        // }
    };

    return (
       <Box >
        {/* {message&&alert(message)} */}
        <ThemeProvider theme={theme} >
            {<Snackbar open={open} autoHideDuration={3000}  onClose={handleClose}  >
        <Alert onClose={handleClose} variant="filled"  severity="success" sx={{ width: '100%' ,color:'white'}}>
         {successMessage}
        </Alert>
      </Snackbar>}
            <Container component="main" maxWidth="sm" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'rgb(33 109 48)' }}>
                    <RateReviewIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                       Create Message
                    </Typography>
                    <Box  component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <TextField
                                    select
                                    required
                                    fullWidth
                                    id="Institute"
                                    label="Institute"
                                    name="institute"
                                    autoComplete="institute"
                                    style={{ width: '100%' }}

                                    margin="normal"

                                    size="medium"
                                >
                                    <MenuItem value="IIST" >IIST</MenuItem>
                                    <MenuItem value="IIP">IIP</MenuItem>
                                    <MenuItem value="IIMR">IIMR</MenuItem>

                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    select
                                    autoComplete="given-name"
                                    name="category"
                                    required
                                    fullWidth
                                    id="category"
                                    label="Category"
                                    value={info.category}
                                    autoFocus
                                    onChange={setval}
                                >
                                    <MenuItem value="General" >General</MenuItem>
                                    <MenuItem value="Academic">Academic</MenuItem>
                                    <MenuItem value="Social">Social</MenuItem>
                                    <MenuItem value="Community" >Community</MenuItem>
                                    <MenuItem value="Spam">Spam</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    select
                                    autoComplete="given-name"
                                    name="batchYear"
                                    required
                                    fullWidth
                                    id="Batch"
                                    label="Batch Year"
                                    autoFocus

                                    onChange={setval}
                                >
                                    <MenuItem value="2023" >2023</MenuItem>
                                    <MenuItem value="2024">2024</MenuItem>
                                    <MenuItem value="2025">2025</MenuItem>
                                    <MenuItem value="2026" >2026</MenuItem>
                                    <MenuItem value="2027">2027</MenuItem>
                                    <MenuItem value="2028">2028</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="heading"
                                    required
                                    fullWidth
                                    id="Heading"
                                    label="Heading"
                                    autoFocus
                                    onChange={setval}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Sub-Heading"
                                    label="Sub-heading"
                                    name="subHeading"
                                    autoComplete="family-name"
                                    onChange={setval}
                                />
                            </Grid>



                            <Grid item xs={12}>
                                <TextField
                                   
                                    required
                                    fullWidth
                                    id="message"
                                    label="Message"
                                    name="message"
                                    autoComplete="message"
                                    style={{ width: '100%' }}

                                    margin="normal"
                                    multiline
                                    rows={5}

                                    size="medium"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 , backgroundColor:"rgb(33 109 48)"}}
                        >
                            Post Message
                        </Button>
                        
                    </Box>
                </Box>
                
            </Container>
        </ThemeProvider>
        </Box>
    );
}
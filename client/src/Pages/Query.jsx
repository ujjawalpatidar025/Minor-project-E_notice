import { Box, Paper, Typography, Button, IconButton } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import React from 'react'

const Query = () => {

    const [open, setOpen] = React.useState(false);
    const [Snackopen, setSnackopen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const [post, setpost] = React.useState(false);

    const checkPost=()=>{
        setpost(true);
        setOpen(false);
    }

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setpost(false);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            {post && <Snackbar open={post} autoHideDuration={3000} onClose={handleSnackClose}  >

                <Alert onClose={handleSnackClose} variant="filled" severity="success" sx={{ width: '100%', color: 'white' }}>
                   Query Posted Successfully!!!!!
                </Alert></Snackbar>}
            <Dialog open={open} onClose={handleClose} style={{ width: '50vw', margin: 'auto' }}>
                <DialogTitle style={{ width: '30vw', margin: 'auto' }}>Post Query</DialogTitle>
                <DialogContent  >
                    <DialogContentText >
                        Write your any type of Query here :
                    </DialogContentText>
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        fullWidth
                        multiline
                        rows={4}
                        style={{ margin: '10px 0' }}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={checkPost} variant='contained' >Post</Button>
                </DialogActions>
            </Dialog>
            <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant='h4' color='primary' sx={{ height: '5rem', padding: '20px', display: 'flex', alignItems: 'center' }}> Having Queries and Doubts ???? Post here</Typography>
                <AddCircleIcon fontSize='large' onClick={handleClickOpen} color='primary' style={{ padding: '0 20px ', cursor: 'pointer' }} />
            </Box>
            <Paper style={{ height: '73vh', width: '100vw', margin: 'auto', backgroundColor: '#c2c2c270', overflow: 'auto' }}>



                <Paper elevation={3} style={{ backgroundColor: '#c0bfbf', minHeight: '7rem', height: 'auto', width: '95vw', margin: ' 10px auto' }}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
                        <Box style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                            <AccountCircleIcon />
                            <Typography marginX={2}>Anonymous</Typography>
                        </Box>
                        <Box>
                            7-March-2023

                        </Box>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography p={2}>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate autem hic, tenetur, cumque quaerat ad incidunt illo recusandae, eos aliquam blanditiis doloremque?
                           
                        </Typography>
                        <IconButton >
                            <ArrowCircleRightIcon fontSize='large' />

                        </IconButton>

                    </Box>

                </Paper>





                <Paper elevation={3} style={{ backgroundColor: '#c0bfbf', minHeight: '7rem', height: 'auto', width: '95vw', margin: ' 10px auto' }}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
                        <Box style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                            <AccountCircleIcon />
                            <Typography marginX={2}>Anonymous</Typography>
                        </Box>
                        <Box>
                            7-March-2023

                        </Box>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography p={2}>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate autem hic, tenetur, cumque quaerat ad incidunt illo recusandae, eos aliquam blanditiis doloremque?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, eveniet cumque doloremque vitae dolor asperiores beatae porro ullam vero debitis recusandae excepturi deserunt!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sequi, aut veritatis beatae rem culpa enim, dolore exercitationem illo, aliquam suscipit deserunt natus!

                        </Typography>
                        <IconButton >
                            <ArrowCircleRightIcon fontSize='large' />

                        </IconButton>

                    </Box>

                </Paper>








                <Paper elevation={3} style={{ backgroundColor: '#c0bfbf', minHeight: '7rem', height: 'auto', width: '95vw', margin: ' 10px auto' }}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
                        <Box style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                            <AccountCircleIcon />
                            <Typography marginX={2}>Anonymous</Typography>
                        </Box>
                        <Box>
                            7-March-2023

                        </Box>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography p={2}>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate autem hic, tenetur, cumque quaerat ad incidunt illo recusandae, eos aliquam blanditiis doloremque?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, eveniet cumque doloremque vitae dolor asperiores beatae porro ullam vero debitis recusandae excepturi deserunt!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sequi, aut veritatis beatae rem culpa enim, dolore exercitationem illo, aliquam suscipit deserunt natus!

                        </Typography>
                        <IconButton >
                            <ArrowCircleRightIcon fontSize='large' />

                        </IconButton>

                    </Box>

                </Paper>









                <Paper elevation={3} style={{ backgroundColor: '#c0bfbf', minHeight: '7rem', height: 'auto', width: '95vw', margin: ' 10px auto' }}>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
                        <Box style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                            <AccountCircleIcon />
                            <Typography marginX={2}>Anonymous</Typography>
                        </Box>
                        <Box>
                            7-March-2023

                        </Box>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography p={2}>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate autem hic, tenetur, cumque quaerat ad incidunt illo recusandae, eos aliquam blanditiis doloremque?
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi, eveniet cumque doloremque vitae dolor asperiores beatae porro ullam vero debitis recusandae excepturi deserunt!

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sequi, aut veritatis beatae rem culpa enim, dolore exercitationem illo, aliquam suscipit deserunt natus!

                        </Typography>
                        <IconButton >
                            <ArrowCircleRightIcon fontSize='large' />

                        </IconButton>

                    </Box>

                </Paper>



            </Paper>


        </div>
    )
}

export default Query
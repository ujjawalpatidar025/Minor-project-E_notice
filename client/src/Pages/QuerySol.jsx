import React, { useEffect, useState } from 'react'
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
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { crtQuerySolution, getSpecificQuery} from '../Redux/features/query/queriesSlice';






const QuerySol = () => {
    const {id}=useParams();
    const dispatch =useDispatch()

    const {getQuery}=useSelector((state)=>state.queries)
    
   useEffect(()=>{
     dispatch(getSpecificQuery(id));
   }, [])

    const [open, setOpen] = React.useState(false);
    const [dopen, setdopen] = React.useState(false);


    const handleDelete = () => {
        setdopen(true);
    }

    const handleDeleteClose = () => {
        setdopen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
    const handleQuerySolution=(event)=>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const querySolutionText = data.get("querySolution");
        const d={
            id:id,
            querySolutionText:querySolutionText
        }
        dispatch(crtQuerySolution(d));
        setOpen(false);
    }
    return (
        <div>

            <Dialog open={open} onClose={handleClose} style={{ width: '50vw', margin: 'auto' }}>
                <DialogTitle style={{ width: '30vw', margin: 'auto' }}>Post Solution</DialogTitle>
                <Box 
                component={'form'}
                noValidate
                onSubmit={handleQuerySolution}>
                <DialogContent  >
                    <DialogContentText >
                        Write your Solution regarding Query :
                    </DialogContentText>
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        fullWidth
                        multiline
                        rows={4}
                        name='querySolution'
                        style={{ margin: '10px 0' }}
                        // onChange={handleQuerySolution}

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant='contained' type='submit'>Post</Button>
                </DialogActions>
                </Box>
            </Dialog>
            <Paper elevation={3} style={{ backgroundColor: '#d8d8d8', minHeight: '7rem', height: 'auto', width: '95vw', margin: ' 10px auto' }}>
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
                    <Box style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <AccountCircleIcon />
                        <Typography marginX={2}>Anonymous</Typography>
                        <IconButton onClick={handleDelete}> <DeleteIcon fontSize='medium' style={{ color: 'black' }} /></IconButton>
                        <Dialog open={dopen} onClose={handleDeleteClose} style={{ width: '50vw', margin: 'auto' }}>
                            <DialogTitle style={{ width: '30vw', margin: 'auto' }}>Delete Query</DialogTitle>
                            <DialogContent  >
                                <DialogContentText >
                                    Are you sure to delete this query :
                                </DialogContentText>

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleDeleteClose}>Cancel</Button>
                                <Button onClick={handleDeleteClose} variant='contained' >Delete</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                    <Box>
                        7-March-2023

                    </Box>
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography p={2}>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate autem hic, tenetur, cumque quaerat ad incidunt illo recusandae, eos aliquam blanditiis doloremque?

                    </Typography>


                </Box>
            </Paper>
            
            <Paper style={{ height: '70vh', width: '100vw', margin: 'auto', backgroundColor: '#c2c2c270', overflow: 'auto' }}>

                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h4' marginLeft={2} color='primary' sx={{ height: '5rem', padding: '20px', display: 'flex', alignItems: 'center' }}> Solutions :</Typography>
                    <AddCircleIcon fontSize='large' onClick={handleClickOpen} color='primary' style={{ padding: '0 20px ', cursor: 'pointer' }} />
                </Box>

{getQuery.querySolution && getQuery.querySolution.map(element =>{
   return <Paper elevation={3} style={{ backgroundColor: '#eceaea', minHeight: '7rem', height: 'auto', width: '95vw', margin: ' 10px auto' }}>
    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
        <Box style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
            <AccountCircleIcon />
            <Typography marginX={2}>Anonymous</Typography>


        </Box>
        <Box>

        {new Date(element.date).toLocaleString()}


        </Box>
    </Box>
    <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography p={2}>

            {element.solution}

        </Typography>


    </Box>

</Paper>



})}

                









                


            </Paper>






        </div>
    )
}

export default QuerySol
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, IconButton,Button } from '@mui/material';
import { deleteMessages } from '../Redux/features/messages/messageSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const Accord = {
    backgroundColor: 'transparent',
    margin:'20px 10px',
    //border:'2px solid #3b7bc6',
    width: 'inherit',
   
    backgroundColor:'white',
    borderRadius:'15px'
};

const AccordSum = {
    backgroundColor: '#F5F5F5',
    borderRadius:'15px'
   
}

export default function AccordianBox(props) {
    const [expanded, setExpanded] = React.useState(false);
    const {user} = useSelector((state)=> state.auth)
    const dispatch=useDispatch();
    const navigate=useNavigate();


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };

  
    const handleClose = () => {
        setOpen(false);
    

      
    };
    const handleDeleteMessage=(id)=>{
        dispatch(deleteMessages(id));
        alert("Message Deleted")
        window.location.reload();
        setOpen(false);
    }

    return (
        <div>
           
            <Accordion m={0} p={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={Accord}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={
                        {
                            display:"flex",
                            width:'inherit',
                        }
                    }


                >
                    {/* width: '15vw'  width: '25vw' width: '35vw' width: '15vw'*/}
                    <Typography sx={{ flexShrink: 0, fontWeight: 'bolder', fontSize: '1.2rem', padding: '0 20px', flex:1, textAlign: 'center' }}>
                        {props.heading}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', padding: ' 0 20px', color: '#211f1f', flex:2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'center' }}> {props.subHeading} </Typography>
                    <Typography sx={{ color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex:'3', textAlign: 'center', padding: '0 20px' }}> {props.message} </Typography>
                    <Typography sx={{ color: 'text.secondary', textAlign: 'right',  flex:1}}>{new Date(props.updatedAt).toLocaleString()}</Typography>

                </AccordionSummary>
                <AccordionDetails style={AccordSum}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Box>
                            <Typography variant='h5' sx={{ padding: '10px' }}>
                                {props.title}
                            </Typography>
                            <Typography sx={{ padding: '10px' }} >
                                {props.subHeading}
                            </Typography>
                            <Typography sx={{ padding: '0 10px' }}>
                                {props.message}
                            </Typography>

                        </Box>
                        {user.admin&&<Box >
                            <IconButton sx={{ color: "black" }}>

                                <DeleteIcon onClick={handleClickOpen} />
                                

                            </IconButton>
                            <Dialog
                                    
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="responsive-dialog-title"
                                >
                                    <DialogTitle id="responsive-dialog-title">
                                    Delete Notification
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                          Are you sure to delete this message?
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button autoFocus  onClick={handleClose}>
                                            No
                                        </Button>
                                        <Button  variant='contained' autoFocus onClick={()=>{handleDeleteMessage(props._id)}}>
                                            Yes
                                        </Button>
                                    </DialogActions>
                                </Dialog>

                        </Box>}
                    </Box>


                </AccordionDetails>
            </Accordion>
    

        </div>
    );
}
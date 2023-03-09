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
    width: '100%',

};

const AccordSum = {
    backgroundColor: '#cecbcbb3'

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


                >
                    <Typography sx={{ flexShrink: 0, fontWeight: 'bolder', fontSize: '1.2rem', margin: '0 20px', width: '15vw', textAlign: 'center' }}>
                        {props.heading}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', margin: ' 0 20px', color: '#211f1f', width: '25vw', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textAlign: 'center' }}> {props.subHeading} </Typography>
                    <Typography sx={{ color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '35vw', textAlign: 'center', margin: '0 20px' }}> {props.message} </Typography>
                    <Typography sx={{ color: 'text.secondary', textAlign: 'right', width: '10vw' }}>{new Date(props.updatedAt).toLocaleDateString()}</Typography>

                </AccordionSummary>
                <AccordionDetails style={AccordSum}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant='h5' sx={{ margin: '10px' }}>
                                {props.title}
                            </Typography>
                            <Typography sx={{ margin: '10px' }} >
                                {props.subHeading}
                            </Typography>
                            <Typography sx={{ margin: '0 10px' }}>
                                {props.message}
                            </Typography>

                        </Box>
                        {user.admin&&<Box>
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
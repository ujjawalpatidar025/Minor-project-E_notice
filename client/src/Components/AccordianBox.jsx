import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Accord = {
    backgroundColor: 'transparent',
    width: '100%',

};

const AccordSum = {
    backgroundColor: '#cecbcbb3'

}

export default function AccordianBox(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion m={0} p={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={Accord}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"


                >
                    <Typography sx={{ flexShrink: 0, fontWeight: 'bolder', fontSize: '1.2rem' ,margin:'0 20px',width:'15vw',textAlign:'center'}}>
                        {props.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary',  color: '#211f1f',width:'25vw', textAlign:'left' }}> Lorem ipsum dolor sit amet consectetur adipisicing</Typography>
                    <Typography sx={{ color: 'text.secondary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',width:'40vw',textAlign:'center' }}> {props.message} </Typography>
                    <Typography sx={{ color: 'text.secondary',  textAlign: 'right',width:'10vw' }}>23-feb-2023</Typography>
                </AccordionSummary>
                <AccordionDetails style={AccordSum}>
                    <Typography variant='h5' sx={{ margin: '10px' }}>
                       {props.title}
                    </Typography>
                    <Typography sx={{ margin: '10px' }} >
                        Sub-heading
                    </Typography>
                    <Typography sx={{margin:'0 10px'}}>
                    {props.message} 
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Accord={
    backgroundColor:'transparent',
    width:'100%',
    
    

};

const AccordSum={
   backgroundColor:'#cecbcbb3'
}

export default function AccordianBox(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion m={0} p={0}  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}style={Accord}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          
        >
          <Typography sx={{ width: '15%', flexShrink: 0 , fontWeight:'bolder',fontSize:'1.2rem',marginLeft:'20px'}}>
            {props.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary',width:'40%',color:'#211f1f' }}> Lorem ipsum dolor sit amet consectetur adipisicing</Typography>
          <Typography sx={{ color: 'text.secondary' ,width:'50vw',overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace:'nowrap'}}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore unde saepe consectetur quia facere vero asperiores quas dolores, harum eos voluptates explicabo, nulla earum. Id maxime corrupti voluptatum sit aperiam. </Typography>
          <Typography sx={{ color: 'text.secondary' ,width:'30vw',textAlign:'right',paddingRight:'20px'}}>23-feb-2023</Typography>
        </AccordionSummary>
        <AccordionDetails style={AccordSum}>
            <Typography variant='h5' sx={{margin:'10px'}}>
                Heading
            </Typography>
            <Typography sx={{margin:'10px'}} >
                Sub-heading
            </Typography>
          <Typography sx={{margin:"0 10px"}}>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
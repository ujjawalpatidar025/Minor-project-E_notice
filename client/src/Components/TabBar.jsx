import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react'
import AccordianBox from './AccordianBox';


const data=[
    {
        title:"Codechef",
        message:"helo everyone",
        date:"23-feb-2023",
        type:'academic'
    },
    {
        title:"Codechef",
        message:"helo everyone",
        date:"24-feb-2023",
        type:'genreral'
    },
    {
        title:"Codechef",
        message:"helo everyone",
        date:"25-feb-2023",
        type:'social'
    },
    {
        title:"Codechef",
        message:"helo everyone",
        date:"26-feb-2023",
        type:'community'
    },
    {
        title:"Codechef",
        message:"helo everyone",
        date:"27-feb-2023",
        type:'spam'
    }
];


function TabPanel(props) {
    const { children, value, index,data, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{height:'27rem',overflow:'auto' }}>
            {/* {data.map((item)=>{
                <Typography>{item.type}</Typography>
            })} */}
            <AccordianBox title={data}/>
            <AccordianBox title={data}/>
            <AccordianBox title={data}/>
            <AccordianBox title={data}/>
            <AccordianBox title={data}/>
            <AccordianBox title={data}/>
            <AccordianBox title={data}/>
            <AccordianBox title={data}/>
            <AccordianBox title={data}/>
            <AccordianBox title={data}/>
            <AccordianBox title={data}/>

            
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const TabBar = () => {

    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


   
    return (
      <div>
       
  
      
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{backgroundColor:'#cbcbcbd4'}}>
            <Tab label="General" {...a11yProps(0)}  sx={{width:'19rem'}}/>
            <Tab label="Academic" {...a11yProps(1)} sx={{width:'19rem'}}/>
            <Tab label="Social" {...a11yProps(2)} sx={{width:'19rem'}}/>
            <Tab label="Community" {...a11yProps(3)}  sx={{width:'19rem'}}/>
            <Tab label="Spam" {...a11yProps(4)} sx={{width:'19rem'}}/>
          
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} data="general">
          
          
        </TabPanel>
        <TabPanel value={value} index={1} data="academic">
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} data="social">
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3} data="coummunity">
          Item four
        </TabPanel>
        <TabPanel value={value} index={4} data="spam">
          Item five
        </TabPanel>
      </Box>
  
        
      </div>
    )
  }
  
  export default TabBar;  
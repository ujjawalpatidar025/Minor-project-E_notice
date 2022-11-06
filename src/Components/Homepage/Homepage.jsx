import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, alpha } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import IconButton from '@material-ui/core/IconButton';
import ErrorIcon from '@material-ui/icons/Error';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WidgetsIcon from '@material-ui/icons/Widgets';
import GroupIcon from '@material-ui/icons/Group';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import './Homepage.css';
import { InputLabel, Link } from '@material-ui/core';
import './Addnoticepage.css';
import Close from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const drawerWidth = 240;


const categories = [
  {
    value: 'All',
    label: 'All',
  },
  {
    value: 'Academic',
    label: 'Academic',
  },
  {
    value: 'Social',
    label: 'Social',
  },
  {
    value: 'Culture',
    label: 'Culture',
  },
];
const institutes = [
  {
    value: 'IIST',
    label: 'IIST',
  },
  {
    value: 'IIP',
    label: 'IIP',
  },
  {
    value: 'IIM',
    label: 'IIM',
  },
];

const useStyles = makeStyles((theme) => ({
  rootForm: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  root: {
    position: 'fixed',
    display: 'flex',
    zIndex: '100',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Homepage() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState('EUR');
   
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  

  const show = () => {
    document.getElementById('addNoticeBox').style.display = 'flex';
  }
  const off = () => {
    document.getElementById("addNoticeBox").style.display = "none";
  };
  

  
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          backgroundColor="red"
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <div className="center_heading">
              {/* <NotificationsActiveIcon className='notification_icon' /> */}
              <Typography variant="h5" noWrap>
                Indore Institute E-Notice Portal
              </Typography>
              {/* <NotificationsActiveIcon className='notification_icon' /> */}
            </div>
            <div className="right_nav">
              <Fab color="primary" aria-label="add" onClick={show}>
                <AddIcon />
              </Fab>

              <a href="/login" className="login_a">
                <Button variant="contained" color="primary" disableElevation>
                  Login
                </Button>
              </a>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {/* {['All', 'Academic', 'Social', 'Community'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}

            <ListItem button key="All">
              <ListItemIcon>
                <AllInclusiveIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="All" />
            </ListItem>
            <ListItem button key="Academic">
              <ListItemIcon>
                <MenuBookIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Academic" />
            </ListItem>
            <ListItem button key="Social">
              <ListItemIcon>
                <WidgetsIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Social" />
            </ListItem>
            <ListItem button key="Community">
              <ListItemIcon>
                <GroupIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Community" />
            </ListItem>
          </List>
          <Divider />
          <List>
            {/* {[ 'Spam', 'Login'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            
          ))} */}
            <ListItem button key="Spam">
              <ListItemIcon>
                <ErrorIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Spam" />
            </ListItem>
            <ListItem button key="Login">
              <ListItemIcon>
                <VpnKeyIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          </List>
        </Drawer>
      </div>

      {/* ////////////////// Add Notice Box ////////////////// */}

      <div className="add-Notice-box" id="addNoticeBox">
        <div className="notice-box">
          <div className="addnotice-heading">
            <h1>Add Notice</h1>
            <Close onClick={off} style={{cursor:'pointer'}} />
          </div>
          <div className="notice-form-section">
            <form noValidate className={classes.rootForm} autoComplete="off">
              <div className='notice-form-input'>
              <TextField id="institute" select label="Select Institute">
              {institutes.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField id="branch" label="Enter Branch" required />
              <TextField id="organization" label="Enter Organization" />
              <TextField id="cateogory" select label="Select Category">
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField id="title" label="Title" />
              <TextField id="subtitle" label="Sub Title" />
              </div>
              <div className='textarea-my'>
              <TextField id="outlined-multiline-static"  label="Write Message" multiline rows={5}/>
              </div>
              <div className='upload-input'>
                <InputLabel>Upload Image/Video</InputLabel>
                <input id="choose image/video"  type='file'/>
              </div>
              <div className='add-notice'>
              <Button type='submit' variant="contained" color="primary" className="submitbtn">
                 Add Notice
               </Button>
              </div>
            
            
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

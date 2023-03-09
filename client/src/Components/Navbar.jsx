import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import { useDispatch} from 'react-redux';
import {logout} from '../Redux/features/auth/authSlice'


const pages = ['IIST', 'IIP', 'IIMR'];

const Nav={
    backgroundColor:'transparent',
    color:'black',
    boxShadow:'none',
   
}

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoutUser = async()=>{
    try{

       const logoutSuccess=await axios.get('/signout');
       if(logoutSuccess){localStorage.clear(); window.location.pathname='/';}

    }catch(err){
      console.log(err);
    }
    setAnchorElUser(null);
  }
  const [isAdmin, setisAdmin] = useState(true);

  



  return (
    <AppBar position="static" top='0'  sx={Nav}>
      <Container maxWidth="xl" sx={{color:'black'}}>
        <Toolbar disableGutters sx={{color:'black'}}>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
               <Link to={`/${page}`} style={{textDecoration:'none'}}><Button
               key={page}
               onClick={handleCloseNavMenu}
               sx={{ my: 2,mx:2, color: 'black', display: 'block' ,fontWeight:'bolder',fontSize:'1rem'}}
             >
               {page}
             </Button>
             </Link>
            ))}

            {isAdmin&&
            <Box style={{width:'5rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Link to="/create" style={{textDecoration:'none'}}><RateReviewIcon sx={{fontSize:'2rem',display:'flex',justifyContent:'center',alignItems:'center',height:'inherit',margin:'auto'}}/>
            </Link>
            </Box>
            }
            

            

          </Box>
          <Tooltip title="Query Section">
            <Link to='/query' style={{textDecoration:'none',color:'black'}}>
          <ContactSupportOutlinedIcon fontSize='medium' sx={{display:'flex',justifyContent:'center', alignItems:'center',margin:' 0 30px',cursor:'pointer'}}/>
          </Link>
          
          </Tooltip>

          <Box sx={{ flexGrow: 0 }}>
          
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
             < AccountCircleTwoToneIcon sx={{fontSize:'2rem'}}/>
              </IconButton>
            </Tooltip>
           
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem  onClick={handleLogoutUser}>
                  <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
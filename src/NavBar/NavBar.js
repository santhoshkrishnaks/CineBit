import { AppBar, Button, Tab, Tabs, Toolbar } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { Outlet, useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
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
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  

const NavBar = () => {
    const navigate=useNavigate();
    const handleHome=()=>{
        navigate("/Home");
    }
    const handleSign=()=>{
        navigate("/SignUp");
    }
    const handleContact=()=>{
        navigate("/ContactUs");
    }
    const handleAbout=()=>{
        navigate("/AboutUs");
    }
  return (
    <React.Fragment>
    <AppBar sx={{background:"#081b27"}}>
    <Toolbar>
    <img src='../Images/LogoCB1.png' alt="LOGO" height="42px" width=""></img>
    <Tabs sx={{marginLeft:"auto",marginRight:"0px"}} textColor='inherit'>
    <Tab label="Home" onClick={handleHome}/>
    <Tab label="About US" onClick={handleAbout}/>

    </Tabs>
    <Button sx={{color:"white",marginLeft:"auto"}} variant='contained' onClick={handleSign}>Sign In</Button>
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
    </Toolbar>
    </AppBar>
    <Outlet/>
    </React.Fragment>

  )
}

export default NavBar
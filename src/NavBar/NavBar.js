import { AppBar, Button, Tab, Tabs, Toolbar,Menu,MenuItem, Avatar } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { Outlet, useNavigate } from 'react-router-dom';
import Create from '../Context/LoginContext';

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
    const {login,setLogin}=useContext(Create);
    const[val,setVal]=useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchor, setAnchor] = useState(null);
    const handleHome=()=>{
      setVal(0);
        navigate("/Home");
    }
    const handleSign=()=>{
        navigate("/SignUp");
    }
    const handleAbout=()=>{
      setVal(2);
      navigate("/AboutUs");
    }
    const handleMovies = (event) => {
      setAnchorEl(event.currentTarget);
  }
  const handlemenu=()=>{
    setVal(1);
    navigate("/List");
  }
  const handleClose = () => {
      setAnchorEl(null);
  }
  const handlea=(event)=>{
    setAnchor(event.currentTarget);
  }
  const handleab=()=>{
    setLogin(false);
    setAnchor(null);
  }
  return (
    <React.Fragment>
    <AppBar sx={{background:"#000508"}}>
    <Toolbar>
    <Link to="/Home"><img src='../Images/LogoCB1.png' alt="LOGO" height="42px" width=""></img></Link>
    <Tabs value={val} sx={{marginLeft:"20vw",marginRight:"0px",'&button:hover':{fontColor:'#151426'}}} textColor=' #6D6D79'>
    <Tab label="About US" value={2} onClick={handleAbout}/>
    <Tab label="Home" value={0} onClick={handleHome} />
    <Tab label="Movies" value={1} onClick={handleMovies}
    aria-controls="movies-menu" aria-haspopup="true"/>
    <Menu
    id="movies-menu"
    anchorEl={anchorEl}
    keepMounted
    open={Boolean(anchorEl)}
    onClose={handleClose}
    >
    <MenuItem onClick={handlemenu}>Top 10 Movies</MenuItem>
    <MenuItem onClick={handlemenu}>Most Popular Movies</MenuItem>
    <MenuItem onClick={handlemenu}>Latest Releases</MenuItem>
    </Menu>
    </Tabs>
    {login ?<Avatar sx={{marginLeft:"15vw",cursor:'pointer'}} onClick={handlea} />:
    <Button sx={{color:"white",marginLeft:"auto"}} variant='contained' onClick={handleSign}>Sign In</Button>}
    <Menu
    id="movies-menu"
    anchorEl={anchor}
    keepMounted
    open={Boolean(anchor)}
    onClose={handleClose}
    >
    <MenuItem onClick={handleab}>LogOut</MenuItem>
    </Menu>
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
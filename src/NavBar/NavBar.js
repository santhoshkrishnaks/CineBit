import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Menu,
  MenuItem,
  Avatar,
  Stack,
  Autocomplete,
  TextField,
  InputAdornment,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext, useEffect, useState } from "react";
import './Nav.css'
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Outlet, useNavigate } from "react-router-dom";
import Create from "../Context/LoginContext";
import axios from "axios";
function FreeSolo() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event, value) => {
    setSearchValue(value);

  };
  const handleSearchClick = () => {
    const searchedMovie = top100Films.find(movie => movie.name === searchValue);
    if (searchedMovie) {
      navigate("/Page",{state:searchedMovie.id});
      window.location.reload(false);
    } else {
      console.log("Movie not found!");
    }
  };

  const navigate=useNavigate();
  return (
    <Stack spacing={2} sx={{ width: 150,marginLeft:"12px",marginRight:"-12px" }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) =>( option.name))}
        value={searchValue}
        onChange={handleSearchChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
              style: { color: "white" },
              startAdornment: (
                <InputAdornment position="start" onClick={handleSearchClick}>
                  <SearchIcon sx={{color:"white",cursor:"pointer"}}/>
                </InputAdornment>
              ),
              onKeyPress: (event) => {
                if (event.key === 'Enter') {
                  handleSearchClick();
                }
              }          
            }}
          />
        )}
      />
    </Stack>
  );
}
let top100Films = [];
const NavBar = () => {
  const pages = ['Home','Movies', 'About Us'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const latest = [
    { id:35,name: "12th Fail", src: "./Images/12thfail.jpg" },
    { id:25,name: "Hi Nanna", src: "./Images/hinanna.jpg" },
    { id:42,name: "Ponninselvan", src: "./Images/ponninselvan.jpg" },
    { id:24,name: "Viduthalai", src: "./Images/viduthalai.jpg" },
    { id:5,name: "Leo", src: "./Images/Leo.jpg" },
    { id:34,name: "Jersy", src: "./Images/jersy.jpg" },
    { id:36,name: "Madmax", src: "./Images/madmax.jpg" },
    { id:28,name: "Good Night", src: "./Images/goodnight.jpg" },
    { id:4,name: "Jailer", src: "./Images/Jailer.jpg" },
  ];
  const top = [
    { id:1,name: "Dhoni", src: "./Images/Ms.jpg" },
    { id:12,name: "Intersellar", src: "./Images/intersellar.jpg" },
    { id:11,name: "JaiBhim", src: "./Images/jaibhim.jpg" },
    { id:32,name: "Premam", src: "./Images/premam.jpg" },
    { id:30,name: "96", src: "./Images/96.jpg" },
    { id:6,name: "Thunivu", src: "./Images/Thunivu.jpg" },
    { id:27,name: "Ip Man", src: "./Images/ipman.jpg" },
    { id:8,name: "Transformer", src: "./Images/Transform.jpg" },
    { id:15,name: "V", src: "./Images/V.jpg" },
  ];
  const popular = [
    { id:23,name: "Rudra", src: "./Images/rudra.jpg"},
    { id:2,name: "Martian", src: "./Images/martian.jpg" },
    { id:3,name: "Asuran", src: "./Images/Asuran.jpg" },
    { id:33,name: "TheGodFather", src: "./Images/thegodfather.jpg" },
    { id:21,name: "Drishyam", src: "./Images/drishyam.jpg" },
    { id:10,name: "Avenger", src: "./Images/Avenger.jpg" },
    { id:39,name: "I", src: "./Images/i.jpg" },
    { id:26,name: "SooraraiPottru", src: "../Images/sooraripottru.jpg" },
    { id:9,name: "Avatar", src: "./Images/Avatar.jpg" },
  ];
  const navigate = useNavigate();
  const { login, setLogin } = useContext(Create);
  const [val, setVal] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchor, setAnchor] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("Email")) {
      setLogin(true);
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://apigenerator.dronahq.com/api/-jC3Qd5p/data");
        top100Films = response.data;
        console.log(">>>>>>>>>>>>>>>>", top100Films);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  const handleHome = () => {
    setVal(0);
    navigate("/Home");
  };
  const handleSign = () => {
    navigate("/SignUp");
  };
  const handleAbout = () => {
    setVal(2);
    navigate("/AboutUs");
  };
  const handleMovies = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlemenu2 = () => {
    setVal(1);
    arr=[...latest];
    navigate("/List", { state: {arr ,s1:"Latest Movies"}});
    window.location.reload(false);
    setAnchorEl(false);
  };
  let arr=[];
  const handlemenu = () => {
    setVal(1);
    arr=[...top];
    navigate("/List", { state: {arr ,s1:"Top Movies"}});
    setAnchorEl(false);
    window.location.reload(false);
  };
  const handlemenu1 = () => {
    setVal(1);
    arr=[...popular];
    navigate("/List",{state:{arr,s1:"Most Popular Movies"}});
    setAnchorEl(false);
    window.location.reload(false);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchor(null);
  };
  const handlea = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleab = () => {
    setLogin(false);
    setAnchor(null);
    localStorage.removeItem("Email");
  };
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#000508" }}>
        <Toolbar>
          <Link to="/Home">
            <img
            className="img"
              src="../Images/LogoCB1.png"
              alt="LOGO"
              height="42px"
              width=""
            ></img>
          </Link>
          <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
            '@media (min-width: 1000px)': { display: 'none' },
          }}
        >
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
          <MenuItem onClick={handleHome}>Home</MenuItem>
          <MenuItem onClick={handleAbout}>About Us</MenuItem>
          <MenuItem onClick={handlemenu}>Top 10 Movies</MenuItem>
          <MenuItem onClick={handlemenu1}>Most Popular Movies</MenuItem>
          <MenuItem onClick={handlemenu2}>Latest Releases</MenuItem>
          </Menu>
        </Box>
          <Tabs
            value={val}
            className="tab"
            sx={{
              marginLeft: "20vw",
              marginRight: "0px",
              "&button:hover": { fontColor: "#151426" },
              '@media (max-width: 1000px)': { display: 'none' },
            }}
            textColor=" #6D6D79"
          >
            <Tab label="About US" value={2} onClick={handleAbout} />
            <Tab label="Home" value={0} onClick={handleHome} />
            <Tab
              label="Movies"
              value={1}
              onClick={handleMovies}
              aria-controls="movies-menu"
              aria-haspopup="true"
            />
            <Menu
              id="movies-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handlemenu}>Top 10 Movies</MenuItem>
              <MenuItem onClick={handlemenu1}>Most Popular Movies</MenuItem>
              <MenuItem onClick={handlemenu2}>Latest Releases</MenuItem>
            </Menu>
          </Tabs>
          {login ? (
            <Avatar
              sx={{ marginLeft: "15vw", cursor: "pointer"}}
              onClick={handlea}
            />
          ) : (
            <Button
              sx={{ color: "white", marginLeft: "auto",'@media (max-width: 600px)': {display:"none"}}}
              variant="contained"
              onClick={handleSign}
            >
              Sign In
            </Button>
          )}
          <Menu
            id="movies-menu"
            anchorEl={anchor}
            keepMounted
            open={Boolean(anchor)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleab}>LogOut</MenuItem>
          </Menu>
          <FreeSolo/>
        </Toolbar>
      </AppBar>
      <Outlet />
    </React.Fragment>
  );
};

export default NavBar;

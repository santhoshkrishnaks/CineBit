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
      navigate("/Page",{state:searchValue});  };

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

  const latest=[{id:"12 th fail",src:"./Images/12thfail.jpg"},{id:"Hi Nanna",src:'./Images/hinanna.jpg'},{id:"Good Night",src:'./Images/goodnight.jpg'},{id:"LEO",src:'./Images/leo.jpg'},{id:"Ponniyin Selvan",src:'./Images/ponninselvan.jpg'},{id:"Jailer",src:'./Images/Jailer.jpg'},{id:"Viduthalai",src:'./Images/viduthalai.jpg'},{id:"Cadver",src:'./Images/cadver.jpg'},{id:"Jersy",src:'./Images/jersy.jpg'},{id:"Mad Max",src:'./Images/madmax.jpg'}];
  const top=[{id:"Interstellar",src:"./Images/intersellar.jpg"},{id:"Ip Man",src:'./Images/ipman.jpg'},{id:"Jai Bhim",src:'./Images/jaibhim.jpg'},{id:"Premam",src:'./Images/premam.jpg'},{id:"96",src:'./Images/96.jpg'},{id:"Spider Man",src:'./Images/spiderman.jpg'},{id:"Batman Begins",src:'./Images/Bat.jpg'},{id:"Train to Busan",src:'./Images/trainto.jpg'},{id:"Pairets of the caribbean",src:'./Images/pairets.jpg'},{id:"Thunivu",src:'./Images/thunivu.jpg'},{id:"GeoStrom",src:'./Images/Geostrom.jpg'}];
  const popular=[{id:"Avatar",src:"./Images/Avatar.jpg"},{id:"The Avengers",src:'./Images/Avenger.jpg'},{id:"The Martian",src:'./Images/martian.jpg'},{id:"M.S.Dhoni the untold story",src:'./Images/Ms.jpg'},{id:"Asuran",src:'./Images/Asuran.jpg'},{id:"Transformers",src:'./Images/Transform.jpg'},{id:"Jai Bhim",src:'./Images/jaibhim.jpg'},{id:"Rudra",src:'./Images/rudra.jpg'},{id:"The GodFather",src:'./Images/thegodfather.jpg'},{id:"I",src:'./Images/i.jpg'},{id:"The Dark knight",src:'./Images/thedarkknight.jpg'},{id:"Drishyam",src:'./Images/drishyam.jpg'},{id:"Soorarai Pottru",src:'../Images/sooraripottru.jpg'},{id:"V",src:'./Images/V.jpg'}];
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
        const response = await axios.get("https://movie-db-api-mauve.vercel.app/movie");
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

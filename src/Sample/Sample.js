import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Button,
  IconButton,
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
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Create from "../Context/LoginContext"; // Assuming this is your LoginContext import
import axios from "axios";

function FreeSolo() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event, value) => {
    setSearchValue(value);
  };

  const handleSearchClick = () => {
    const searchedMovie = top100Films.find((movie) => movie.name === searchValue);
    if (searchedMovie) {
      navigate("/Page", { state: searchedMovie.id });
      window.location.reload(false);
    } else {
      console.log("Movie not found!");
    }
  };

  const navigate = useNavigate();
  return (
    <Stack spacing={2} sx={{ width: "300px", marginLeft: "12px", marginRight: "-12px" }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.name)}
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
                  <SearchIcon sx={{ color: "white", cursor: "pointer" }} />
                </InputAdornment>
              ),
              onKeyPress: (event) => {
                if (event.key === "Enter") {
                  handleSearchClick();
                }
              },
            }}
          />
        )}
      />
    </Stack>
  );
}

let top100Films = [];
const Sample = () => {
  const latest = [
    // ... your latest movie data
  ];
  const top = [
    // ... your top movie data
  ];
  const popular = [
    // ... your popular movie data
  ];
  const navigate = useNavigate();
  const { login, setLogin } = useContext(Create); // Assuming this is your LoginContext usage
  const [val, setVal] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlemenu = () => {
    setVal(1);
    const arr = [...top];
    navigate("/List", { state: { arr, s1: "Top Movies" } });
    window.location.reload(false);
  };

  const handlemenu1 = () => {
    setVal(1);
    const arr = [...popular];
    navigate("/List", { state: { arr, s1: "Most Popular Movies" } });
    window.location.reload(false);
  };

  const handlemenu2 = () => {
    setVal(1);
    const arr = [...latest];
    navigate("/List", { state: { arr, s1: "Latest Releases" } });
    window.location.reload(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlea = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleab = () => {
    setLogin(false);
    setAnchorEl(null);
    localStorage.removeItem("Email");
  };

  const drawerContent = (
    <List>
      <ListItem button key="Home" onClick={handleHome}>
        <ListItemIcon>
          {/* Add appropriate icon here */}
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button key="Movies" onClick={handleDrawerToggle}>
        <ListItemIcon>
          {/* Add appropriate icon here */}
        </ListItemIcon>
        <ListItemText primary="Movies" />
      </ListItem>
      <ListItem button key="About Us" onClick={handleAbout}>
        <ListItemIcon>
          {/* Add appropriate icon here */}
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItem>
      {login ? (
        <ListItem button key="Logout" onClick={handleab}>
          <ListItemIcon>
            {/* Add appropriate icon here */}
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      ) : null}
    </List>
  );

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#000508" }}>
        <Toolbar>
          <Link to="/Home">
            <img
              src="../Images/LogoCB1.png"
              alt="LOGO"
              height="42px"
              width=""
            />
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {/* Add appropriate menu icon here */}
          </IconButton>
          <Tabs
            value={val}
            className="tab"
            sx={{
              marginLeft: "auto",
              "& button:hover": { fontColor: "#151426" },
            }}
            textColor=" #6D6D79"
          >
            <Tab label="About US" value={2} onClick={handleAbout} />
            <Tab label="Home" value={0} onClick={handleHome} />
            <Tab label="Movies" value={1} onClick={handleDrawerToggle} />
          </Tabs>
          {login ? (
            <Avatar sx={{ marginLeft: "auto", cursor: "pointer" }} onClick={handlea} />
          ) : (
            <Button
              sx={{ color: "white", marginLeft: "auto" }}
              variant="contained"
              onClick={handleSign}
            >
              Sign In
            </Button>
          )}
          <Menu
            id="movies-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleab}>LogOut</MenuItem>
          </Menu>
          <FreeSolo />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawerContent}
      </Drawer>
      <Outlet />
    </React.Fragment>
  );
};

export default Sample;

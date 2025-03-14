
import React from "react";
import { AppBar, Toolbar, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../Context/ThemeContext";

const Header = ({ searchTerm, setSearchTerm }) => {
  const { toggleTheme } = useThemeContext();
  const navigate = useNavigate(); 

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(to right, #ce5a77, #f5e342)",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Dashboard
        </Typography>

      
        <TextField
          label="Search Users"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="small"
          sx={{ marginRight: 2, backgroundColor: "white" }}
        />

  
        <Button color="inherit" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate("/user-data")}>
          User Data
        </Button>
        <Button color="inherit" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

// src/components/AppBar.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Appbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "start" }}
        >
          Your App Name
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ position: "relative", marginRight: "10px" }}>
            <InputBase
              placeholder="Search..."
              startAdornment={<SearchIcon />}
              sx={{ p: "8px", borderRadius: "5px", backgroundColor: "#f1f1f1" }}
            />
          </div>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

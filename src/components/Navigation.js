import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const NavBar = () => {
  return (
    <>
      <Paper
        variant="outlined"
        square
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      >
        <BottomNavigation>
          <BottomNavigationAction
            value="home"
            to="/home"
            icon={<HomeOutlinedIcon />}
          />
          <BottomNavigationAction
            value="search"
            to="/search"
            icon={<SearchOutlinedIcon />}
          />
          <BottomNavigationAction
            value="likes"
            to="/likes"
            icon={<FavoriteBorderOutlinedIcon />}
          />
          <BottomNavigationAction
            value="tickets"
            to="/tickets"
            icon={<ConfirmationNumberOutlinedIcon />}
          />
          <BottomNavigationAction
            value="profile"
            to="/profile"
            icon={<PersonOutlineOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default NavBar;

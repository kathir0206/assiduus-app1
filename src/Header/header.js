import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import assets1 from "../assets/companyLogo.png";
import assets2 from "../assets/employee.jpeg";

const Header = () => {
  return (
   <header>
   <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <IconButton color="inherit">
          <Avatar src={assets1} />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold" }}
          style={{ color: "black" }}
        >
          ASSIDUUS
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "37%",
                transform: "translateY(-40%)",
                paddingRight: "167px",
                backgroundColor: "#F0F0F0",
                paddingTop: "5px",
                borderRadius: "5px",
              }}
            >
              <SearchIcon style={{ color: "	#696969" }} />
            </div>
            <InputBase
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton color="inherit">
            <NotificationsIcon style={{ color: "black" }} />
          </IconButton>
          <Avatar alt="User" src={assets2} />
        </div>
      </Toolbar>
    </AppBar>
    </header>
  );
};

export default Header;

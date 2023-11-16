import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "./Sidebar.css";

const Sidebar = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId === clickedButton ? null : buttonId);
  };

  const isButtonClicked = (buttonId) => {
    return buttonId === clickedButton;
  };

  return (
    <Paper elevation={3} className="sidebar-container">
      <List>
        {[
          { id: "dashboard", text: "Dashboard", icon: <DashboardIcon /> },
          { id: "accounts", text: "Accounts", icon: <AccountBalanceIcon /> },
          { id: "payroll", text: "Payroll", icon: <MonetizationOnIcon /> },
          { id: "reports", text: "Reports", icon: <DescriptionIcon /> },
          { id: "advisors", text: "Advisors", icon: <SupervisorAccountIcon /> },
          { id: "contacts", text: "Contacts", icon: <ContactMailIcon /> },
        ].map((button) => (
          <ListItem
            key={button.id}
            button
            className={`sidebar-button ${
              isButtonClicked(button.id) ? "clicked" : ""
            }`}
            onClick={() => handleButtonClick(button.id)}
          >
            <ListItemIcon>{button.icon}</ListItemIcon>
            <ListItemText primary={button.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import "./LeftColumn.css"; 
import BarChartsleft from "./BarChartsleft"

const LeftColumn = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [showMonthDropdown, setShowMonthDropdown] = useState(false);


  const [selectedOption, setSelectedOption] = useState("Manage"); 
  const [showOptionDropdown, setShowOptionDropdown] = useState(false);

  const toggleMonthDropdown = () => {
    setShowMonthDropdown(!showMonthDropdown);
  
    setShowOptionDropdown(false);
  };

  const toggleOptionDropdown = () => {
    setShowOptionDropdown(!showOptionDropdown);
   
    setShowMonthDropdown(false);
  };

  const handleMonthSelection = (index) => {
    setSelectedMonth(
      new Date(0, index).toLocaleString("default", { month: "long" })
    );
    setShowMonthDropdown(false);
  };

  const handleOptionSelection = (option) => {
    setSelectedOption(option);
    setShowOptionDropdown(false);
  };

  return (
    <Paper>
      <div className="left-column">
      
        <Typography variant="subtitle1" className="section-heading3">
          Checking Account
        </Typography>
        <div className="line3"></div> 
       
        <div className="month-input-container">
          <div className="input-wrapper" onClick={toggleMonthDropdown}>
            <input
              type="text"
              placeholder="January"
              value={selectedMonth || ""}
              readOnly
              className="month-input"
            />
          
            <div className="dropdown-symbol" onClick={toggleMonthDropdown}>
              ▼
            </div>
          </div>
       
          {showMonthDropdown && (
            <div className="month-dropdown">
              {Array.from({ length: 12 }, (_, index) => (
                <div
                  key={index}
                  className="month-option"
                  onClick={() => handleMonthSelection(index)}
                >
                  {new Date(0, index).toLocaleString("default", {
                    month: "long",
                  })}
                </div>
              ))}
            </div>
          )}
        </div>

       
        <div className="option-input-container">
          <div className="input-wrapper" onClick={toggleOptionDropdown}>
            <input
              type="text"
              value={selectedOption || ""}
              readOnly
              className="option-input"
            />
           
            <div className="dropdown-symbol" onClick={toggleOptionDropdown}>
              ▼
            </div>
          </div>
          
          {showOptionDropdown && (
            <div className="option-dropdown">
              <div
                className="option"
                onClick={() => handleOptionSelection("Manage")}
              >
                Manage
              </div>
              <div
                className="option"
                onClick={() => handleOptionSelection("Sales")}
              >
                Sales
              </div>
            </div>
          )}
        </div>
        <BarChartsleft/>
      </div>
    </Paper>
  );
};

export default LeftColumn;

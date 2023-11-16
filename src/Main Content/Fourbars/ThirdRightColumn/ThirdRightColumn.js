// ThirdContainer.js
import React from "react";
import { Paper, Typography} from "@mui/material";
import "./ThirdContainer.css";
import BarChart from "./BarChart";


const ThirdContainer = () => {
  return (
    <Paper className="third-container">
      
      <div className="top-section1">
       
        <Typography variant="subtitle1" className="section-heading">
          Total Cash Flow
        </Typography>

        
        <div className="box-container">
          <div className="box in"></div>
          <Typography variant="subtitle2" className="box-text">
            In
          </Typography>
        </div>

      
        <div className="box-container1">
          <div className="box out"></div>
          <Typography variant="subtitle2" className="box-text">
            Out
          </Typography>
        </div>
      </div>

   
      <div className="heading-line" />
      <BarChart/>
      
    </Paper>
  );
};

export default ThirdContainer;

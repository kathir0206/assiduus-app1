import React, { useRef } from "react";
import { Paper, Typography, Button } from "@mui/material";
import "./RightColumn.css";
import D3RightColumn from "./D3RightColumn";

const RightColumn = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
  
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    
    const selectedFile = event.target.files[0];
    
    console.log("Selected file:", selectedFile);
  };

  return (
    <Paper className="column-container">
    
      <div className="top-section">
        <Typography variant="subtitle1" className="section-heading">
          Invoice Owed to You
        </Typography>
      
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
       
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ backgroundColor: "#BFD7ED", color: "rgb(24, 180, 24)" }}
          onClick={handleButtonClick}
        >
          New Sales Invoice
        </Button>
      </div>
      <div className="heading-line1" />
      <D3RightColumn />

      
    </Paper>
  );
};

export default RightColumn;

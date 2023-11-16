import React from "react";
import { Grid, Paper } from "@mui/material";
import "./MainContent.css";
import LeftColumn from "./Fourbars/LeftColumn/LeftColumn";
import RightColumn from "./Fourbars/RightColumn/RightColumn";
import ThirdRightColumn from "./Fourbars/ThirdRightColumn/ThirdRightColumn";
import BelowFirstColumn from "./Fourbars/BelowFirstColumn/BelowFirstColumn";


const MainContent = () => {
  return (
    <Paper className="main-content-container">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <LeftColumn/>
        </Grid>
        <Grid item xs={6}>
       <RightColumn/>
        </Grid>
        <Grid item xs={6}>
          <ThirdRightColumn/>
        </Grid>
        <Grid item xs={6}>
          <BelowFirstColumn/>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainContent;

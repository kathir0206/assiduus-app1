// BelowFirstColumn.js
import React from "react";
import { Paper, Typography } from "@mui/material";
import "./BelowFirstColumn.css"

const BelowFirstColumn = () => {
  return (
    <Paper className="account-watchlist-container">
      <Typography variant="subtitle1" className="section-heading2">
        Account Watchlist
      </Typography>
      <div className="line" />
      <div className="row">
        <Typography variant="subtitle2" className="row-heading">
          Account
        </Typography>
        <div className="row-subheading">
          <Typography variant="subtitle2" className="row-subheading-text">
            This Month
          </Typography>
          <div className="space-between"></div>
          <Typography variant="subtitle2" className="row-subheading-text1">
            YTD
          </Typography>
        </div>
      </div>
      <div className="details">
        <div className="detail-group">
          <Typography variant="subtitle2" className="detail-item advertising">
            Sales
          </Typography>
          <div className="numbers">
            <Typography variant="body2" className="number">
              2,342.90
            </Typography>
          </div>
          <div className="numbers1">
            <Typography variant="body2" className="number">
              1,232.09
            </Typography>
          </div>
        </div>

        <div className="detail-group">
          <Typography variant="subtitle2" className="detail-item advertising">
            Inputs
          </Typography>
          <div className="numbers">
            <Typography variant="body2" className="number">
              6,879.02
            </Typography>
          </div>
          <div className="numbers1">
            <Typography variant="body2" className="number">
              9,271.36
            </Typography>
          </div>
        </div>
        <div className="detail-group">
          <Typography variant="subtitle2" className="detail-item advertising">
            Output
          </Typography>
          <div className="numbers">
            <Typography variant="body2" className="number">
              4,692.26
            </Typography>
          </div>
          <div className="numbers1">
            <Typography variant="body2" className="number">
              9,768.09
            </Typography>
          </div>
        </div>
        <div className="detail-group">
          <Typography variant="subtitle2" className="detail-item advertising">
            Hoppy
          </Typography>
          <div className="numbers">
            <Typography variant="body2" className="number">
              1,313.03
            </Typography>
          </div>
          <div className="numbers1">
            <Typography variant="body2" className="number">
              1,234.90
            </Typography>
          </div>
        </div>
        <div className="detail-group">
          <Typography variant="subtitle2" className="detail-item advertising">
            Stock
          </Typography>
          <div className="numbers">
            <Typography variant="body2" className="number">
              4,652.10
            </Typography>
          </div>
          <div className="numbers1">
            <Typography variant="body2" className="number">
              2529.90
            </Typography>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default BelowFirstColumn;

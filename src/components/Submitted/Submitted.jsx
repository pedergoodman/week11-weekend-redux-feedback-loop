import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom/";

// Material UI imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton, Typography } from "@mui/material";


export default function Submitted() {

  const handleClickHome = () => {
    console.log('cliecked Home');
  }

  const handleClickNewFeedback = () => {
    console.log('cliecked New Feedback');
  }



  return (
    <>
    <Box
      className="form-container"
      noValidate
      autoComplete="off"
    >
      <h2>Any comments you want to leave?</h2>

      <div className="submitted-btn-container">

        {/* <Button size="large">Home</Button> */}

        <Button
          aria-label="submit"
          variant="contained"
          onClick={handleClickNewFeedback}
        >
          Leave New Feedback
        </Button>

        <Button
          aria-label="submit"
          variant="contained"
          onClick={handleClickHome}
        >
          Go Home
        </Button>

      </div>
    </Box>
  </>
);
}

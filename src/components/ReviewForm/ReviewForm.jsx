import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom/";

// Material UI imports
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// start component Function
export default function ReviewForm() {

  const survey = useSelector(store => store.survey);
  const history = useHistory();

  // handleClickNext function
  const handleClickSubmit = event => {
    console.log("Submit clicked! Survey is:", survey);
    // TODO - POST to DB


    // move to next page
    history.push("/submitted");

    // console.log("isEmpty is", isEmpty);
  };

  // TODO - handleClickBack function
  const handleClickBack = () => {
    history.push("/comment");
  };

  return (
    <>
      <Box className="form-container" noValidate autoComplete="off">
        <h3>Review your feedback!</h3>
        <div>
          <Typography>Feelings: {survey.feeling}</Typography>
          <Typography>Understanding: {survey.understanding}</Typography>
          <Typography>Support: {survey.support}</Typography>
          <Typography>Comments: {survey.comment}</Typography>
        </div>
        <div className="form-btn-container">
          <IconButton aria-label="next" onClick={handleClickBack}>
            <ArrowBackIcon />
          </IconButton>

          {/* <Button size="large">Home</Button> */}

          <Button
            aria-label="submit"
            variant="contained"
            onClick={handleClickSubmit}
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </div>
      </Box>
    </>
  );
}

import React from "react";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom/";

// Material UI imports
import Box from "@mui/material/Box";
import { Button, IconButton, Typography } from "@mui/material";

export default function Submitted() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickNewFeedback = () => {
    // clear impute and move to home page

    dispatch({ type: "CLEAR" });
    history.push("/");
  };

  return (
    <>
      <Box id='submitted-container' className="form-container" noValidate autoComplete="off">
        <h2>Submitted!</h2>
        <h2>Thanks for the feedback!</h2>

        <div className="submitted-btn-container">

          <Button
          
            aria-label="submit"
            variant="contained"
            onClick={handleClickNewFeedback}
          >
            Leave New Feedback
          </Button>
        </div>
      </Box>
    </>
  );
}

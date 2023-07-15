import React from "react";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom/";

// Material UI imports
import Box from "@mui/material/Box";
import { Button, IconButton, Typography } from "@mui/material";

export default function Submitted() {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickHome = () => {
    // clear imputs and move to home page
    dispatch({ type: "CLEAR" });
    history.push("/");
  };

  const handleClickNewFeedback = () => {
    // clear imputs and move to home page

    dispatch({ type: "CLEAR" });
    history.push("/feeling");
  };

  return (
    <>
      <Box id='submitted-container' className="form-container" noValidate autoComplete="off">
        <h2>Submitted!</h2>
        <h2>Thanks for the feedback!</h2>

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

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
      <Box id='home-container' className="form-container" noValidate autoComplete="off">
        <h2>Please add your Feedback!</h2>

        <div className="home-btn-container">
          {/* <Button size="large">Home</Button> */}

          <Button
            sx={{width: 130, height: 50, fontSize: '1.3rem', fontWeight: 200}}
            aria-label="submit"
            variant="contained"
            onClick={handleClickNewFeedback}
          >
            Start
          </Button>
        </div>
      </Box>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom/";

// Material UI imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

// start component Function
export default function CommentForm() {
  // options for input form
  const ratings = [1, 2, 3, 4, 5];
  const storeCommentValue = useSelector(store => store.survey.comment);
  const dispatch = useDispatch();
  const history = useHistory();

  // local state to track input selection
  const [commentValue, setCommentValue] = useState("");

  // update selected value, handle form validation condition
  const handleChange = event => {
    setCommentValue(event.target.value);
  };

  // useEffect to load saved state from store
  useEffect(() => {
    setCommentValue(storeCommentValue);
  }, []);

  // handleClickNext function
  const handleClickNext = event => {
    // Dispatch to reducer
    dispatch({
      type: "COMMENT",
      payload: commentValue,
    });
    // move to next page
    history.push("/review");
  };

  // TODO - handleClickBack function
  const handleClickBack = () => {
    history.push("/supported");
  };

  return (
    <>
      <Box
        className="form-container"
        component="form"
        sx={{
          textAlign: "center",
          width: "fit-content",
          margin: "auto",
        }}
        noValidate
        autoComplete="off"
      >
        <h3>Any comments you want to leave?</h3>
        <div>
          <TextField
            multiline
            required
            id="outlined-multiline-flexible"
            label="Add Comment"
            maxRows={5}
            onChange={handleChange}
            value={commentValue}
            sx={{ textAlign: "center", width: 350 }}
          />
        </div>
        <div className="form-btn-container">
          <IconButton aria-label="next" onClick={handleClickBack}>
            <ArrowBackIcon />
          </IconButton>

          {/* <Button size="large">Home</Button> */}

          <Button
            aria-label="submit"
            variant="contained"
            onClick={handleClickNext}
            endIcon={<ArrowForwardIcon />}
          >
            Next
          </Button>
        </div>
      </Box>
    </>
  );
}

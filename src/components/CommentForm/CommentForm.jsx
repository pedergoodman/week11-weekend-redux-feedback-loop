import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom/";

// Material UI imports
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, IconButton, Typography } from "@mui/material";

// start component Function
export default function CommentForm() {
  // options for input form
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
    if (storeCommentValue) {
      setCommentValue(storeCommentValue);
    }
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

  // handleClickBack function
  const handleClickBack = () => {
    history.push("/supported");
  };

  return (
    <>
      <Box
        className="form-container"
        component="form"
        noValidate
        autoComplete="off"
      >
        <h3>Any comments you want to leave?</h3>
        <div>
          <TextField
            multiline
            required
            id="comment-input"
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

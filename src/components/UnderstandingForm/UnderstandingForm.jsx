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
export default function UnderstandingForm() {
  // options for input form
  const ratings = [1, 2, 3, 4, 5];
  const storeUnderstandingValue = useSelector(
    store => store.survey.understanding
  );
  const dispatch = useDispatch();
  const history = useHistory();

  // local state to track input selection
  const [understandingValue, setUnderstandingValue] = useState("");
  // form validation state
  const [isEmpty, setIsEmpty] = useState(false);

  // update selected value, handle form validation condition
  const handleChange = event => {
    setUnderstandingValue(event.target.value);
    setIsEmpty(false);
  };

  // useEffect to load saved state from store
  useEffect(() => {
    setUnderstandingValue(storeUnderstandingValue);
  }, []);

  // handleClickNext function
  const handleClickNext = event => {
    console.log("next clicked! Value is:", understandingValue);
    // validate form input
    if (!understandingValue) {
      setIsEmpty(true);
    } else {
      // Dispatch to reducer
      dispatch({
        type: "UNDERSTANDING",
        payload: understandingValue,
      });
      // move to next page
      history.push("/supported");
    }
    // console.log("isEmpty is", isEmpty);
  };

  // TODO - handleClickBack function
  const handleClickBack = () => {
    history.push("/feeling");
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
        <h3>How well are you understanding the content?</h3>
        <div>
          <TextField
            select
            required
            id="feeling-input"
            label="Select"
            value={understandingValue}
            onChange={handleChange}
            sx={{ textAlign: "center", width: 175 }}
            helperText={
              isEmpty ? "please submit a value." : "please add a value"
            }
            error={isEmpty}
          >
            {ratings.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
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

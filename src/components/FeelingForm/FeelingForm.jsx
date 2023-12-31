import React, { useEffect, useState } from "react";
import "./FeelingForm.css";
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
export default function FeelingForm() {
  // options for input form
  const ratings = [1, 2, 3, 4, 5];
  const storeFeelingValue = useSelector(store => store.survey.feeling);
  const dispatch = useDispatch();
  const history = useHistory();

  // local state to track input selection
  const [feelingValue, setFeelingValue] = useState("");
  // form validation state
  const [isEmpty, setIsEmpty] = useState(false);

  // update selected value, handle form validation condition
  const handleChange = event => {
    setFeelingValue(event.target.value);
    setIsEmpty(false);
  };

  // useEffect to load saved state from store
  useEffect(() => {
    if (storeFeelingValue) {
      setFeelingValue(storeFeelingValue)
    }
  }, []);

  // handleClickNext function
  const handleClickNext = event => {
    // validate form input
    if (!feelingValue) {
      setIsEmpty(true);
    } else {
      // Dispatch to reducer
      dispatch({
        type: "FEELING",
        payload: feelingValue,
      });
      // move to next page
      history.push("/understanding");
    }
  };

  // TODO - handleClickBack function

  return (
    <>
      <Box
        className="form-container"
        component="form"
        noValidate
        autoComplete="off"
      >
        <h3>How are you Feeling?</h3>
        <div>
          <TextField
            select
            required
            id="feeling-input"
            label="Select"
            value={feelingValue}
            onChange={handleChange}
            sx={{ textAlign: "center", width: 175 }}
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

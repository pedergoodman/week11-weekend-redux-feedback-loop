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
export default function SupportedForm() {
  // options for input form
  const ratings = [1, 2, 3, 4, 5];
  const storeSupportedValue = useSelector(store => store.survey.support);
  const dispatch = useDispatch();
  const history = useHistory();

  // local state to track input selection
  const [supportedValue, setSupportedValue] = useState("");
  // form validation state
  const [isEmpty, setIsEmpty] = useState(false);

  // update selected value, handle form validation condition
  const handleChange = event => {
    setSupportedValue(event.target.value);
    setIsEmpty(false);
  };

  // useEffect to load saved state from store
  useEffect(() => {
    if (storeSupportedValue) {
      setSupportedValue(storeSupportedValue);
    }
  }, []);

  // handleClickNext function
  const handleClickNext = event => {
    // validate form input
    if (!supportedValue) {
      setIsEmpty(true);
    } else {
      // Dispatch to reducer
      dispatch({
        type: "SUPPORT",
        payload: supportedValue,
      });
      // move to next page
      history.push("/comment");
    }
  };

  // handleClickBack function
  const handleClickBack = () => {
    history.push("/understanding");
  };
  return (
    <>
      <Box
        className="form-container"
        component="form"
        noValidate
        autoComplete="off"
      >
        <h3>How well are you being supported?</h3>
        <div>
          <TextField
            select
            required
            id="supported-input"
            label="Select"
            value={supportedValue}
            onChange={handleChange}
            sx={{ textAlign: "center", width: 175 }}
            /* helperText={
              isEmpty ? "please submit a value." : "please add a value"
            } */
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

import React, { useState } from "react";
import "./AdminTableItem.css";
import axios from "axios";

// material UI imports
import { Button, Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";

export default function AdminTableItem({ review, refreshReviewList }) {
  // POPOVER for delete functionality
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [isFlagged, setIsFlagged] = useState(review.flagged);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setOpen(previousOpen => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  // MUI popper, "cancel button"
  const handleClose = () => {
    setAnchorEl(null);
  };

  // MUI popper, "delete confirm button"
  const handleDelete = () => {
    console.log("DELETE DELETE DELETE");

    axios
      .delete(`/reviews/${review.id}`)
      .then(result => {
        refreshReviewList()
      })
      .catch(err => {
        console.log('Error DELETINGing review', err);
      });

  };

  // toggle flagged status
  const toggleFlagged = event => {
    setIsFlagged(event.target.checked);
    console.log("isflagged is", isFlagged);

    axios
      .put(`/reviews/${review.id}`)
      .then(result => {
        refreshReviewList()
      })
      .catch(err => {
        console.log('Error Updating flagged status', err);
      });
  };

  return (
    <TableRow
      key={review.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="right">{review.feeling}</TableCell>
      <TableCell align="right">{review.understanding}</TableCell>
      <TableCell align="right">{review.support}</TableCell>
      <TableCell align="right">{review.comments ? `"${review.comments}"` : ''}</TableCell>
      <TableCell align="center">
        <Switch
          checked={isFlagged}
          onChange={toggleFlagged}
          inputProps={{ "aria-label": "controlled" }}
        />
      </TableCell>
      <TableCell align="center">
        <IconButton
          aria-label="delete"
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <DeleteIcon />
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            placement="top-end"
            transition
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper
                  className="delete-alert"
                  style={{ backgroundColor: "rgb(255 180 180)" }}
                >
                  <p>Are you sure?</p>
                  <div>
                    <Button
                      className="cancel-delete"
                      variant="contained"
                      color="inherit"
                      sx={{
                        ":hover": {
                          bgcolor: "#ababab",
                        },
                        fontSize: "10px",
                      }}
                      onClick={handleClose}
                    >
                      CANCEL
                    </Button>
                    <Button
                      className="confirm-delete"
                      variant="contained"
                      color="inherit"
                      sx={{
                        ":hover": {
                          bgcolor: "rgb(255 0 0)",
                          color: "white",
                          fontWeight: 700,
                        },
                        fontSize: "10px",
                      }}
                      onClick={handleDelete}
                    >
                      DELETE
                    </Button>
                  </div>
                </Paper>
              </Fade>
            )}
          </Popper>
        </IconButton>
      </TableCell>
    </TableRow>
  );

  // <Alert severity="error">This is an error alert — check it out!</Alert>
}

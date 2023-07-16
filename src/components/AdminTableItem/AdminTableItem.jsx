import React, { useState } from "react";
import { useSelector } from "react-redux";

// material UI imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Switch from "@mui/material/Switch";
import Alert from "@mui/material/Alert";

export default function AdminTableItem({ review }) {
  return (
    <TableRow
      key={review.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="right">{review.feeling}</TableCell>
      <TableCell align="right">{review.understanding}</TableCell>
      <TableCell align="right">{review.support}</TableCell>
      <TableCell align="right">{review.comments}</TableCell>
      <TableCell align="center">
        <Switch
          // checked={checked}
          // onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </TableCell>
      <TableCell align="center">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );


  // <Alert severity="error">This is an error alert — check it out!</Alert>
}

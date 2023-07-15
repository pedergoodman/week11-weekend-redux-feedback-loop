import React from "react";
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
import Switch from '@mui/material/Switch';


export default function Admin() {
  const reviewsList = useSelector(store => store.reviewsList);

  // console.log('reviewsList is:', reviewsList);

  return (
    <>
      <div>Admin</div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Feeling</TableCell>
              <TableCell align="right">Understanding</TableCell>
              <TableCell align="right">Supported</TableCell>
              <TableCell align="right">Comments</TableCell>
              <TableCell align="right">Flag?</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviewsList.map(review => (
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

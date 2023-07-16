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
import Alert from "@mui/material/Alert";
import AdminTableItem from "../AdminTableItem/AdminTableItem";

export default function Admin({refreshReviewList}) {
  const reviewsList = useSelector(store => store.reviewsList);

  // console.log('reviewsList is:', reviewsList);

  return (
    <>
      <TableContainer
        id="reviews-table-container"
        component={Paper}
        sx={{ width: "90%", margin: "auto", backgroundClip: "#ae6767" }}
      >
        <h2>Feedback Results</h2>
        
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Feeling</TableCell>
              <TableCell align="right">Understanding</TableCell>
              <TableCell align="right">Supported</TableCell>
              <TableCell align="right">Comments</TableCell>
              <TableCell align="right">Review Further</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviewsList.map(review => (
              <AdminTableItem key={review.id} review={review} refreshReviewList={refreshReviewList} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

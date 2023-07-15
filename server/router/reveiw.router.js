const express = require('express');
const reviewRouter = new express.Router();
const pool = require("../modules/pool");



// GET request (get review list from server)
reviewRouter.get('/', (req, res) => {

  // sql query 
  const sqlText = `SELECT * from "feedback" ORDER BY "date"`

  pool.query(sqlText)
    .then((result) => {
      res.send(result.rows);
    }).catch((err) => {
      console.log('error GETting list from Database');
      res.sendStatus(500)
    });

});



// POST request (post review to server)
reviewRouter.post('/', (req, res) => {
  
  console.log(req.body);
  const survey = req.body

  const sqlText = `INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4)`


  const queryParams = [survey.feeling, survey.understanding, survey.support, survey.comment]

  

  pool.query(sqlText, queryParams)
    .then((result) => {
      res.sendStatus(201)
    }).catch((err) => {
      console.log('error GETting list from Database');
      res.sendStatus(500)
    });



});


// DELETE request (delete from Admin table)

reviewRouter.delete('/:id', (req, res) => {

});

// PUT request (flag for further review)
reviewRouter.put('/:id', (req, res) => {

});

module.exports = reviewRouter;
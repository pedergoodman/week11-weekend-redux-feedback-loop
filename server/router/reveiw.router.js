const express = require('express');
const reviewRouter = new express.Router();



// GET request (get review list from server)
reviewRouter.get('/', (req, res) => {

}); 



// POST request (post review to server)
reviewRouter.post('/', (req, res) => {

}); 


// DELETE request (delete from Admin table)

reviewRouter.delete('/:id', (req, res) => {

}); 

// PUT request (flag for further review)
reviewRouter.put('/:id', (req, res) => {

}); 

module.exports = reviewRouter;
var express = require('express');
var router = express.Router();
var Book = require('../models/Book.js');

//Getting all books from the database
router.get('/', function(req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

//Finding a book by using its ID
router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//Saving a book using its ID
router.post('/', function(req, res, next) {
  //console.log("*********************************"+JSON.parse(req.body.book))
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

//Updating book by using its ID
//The update value is sent to Mongo DB as
//Model.findByIdAndUpdate(id, { $set: { name: 'jason bourne' }}, options, callback)
router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


//Deleting book by using its ID
router.delete('/:id', function(req, res, next) {
  console.log("--------------------------------------"+req.body);
  Book.findByIdAndRemove(req.params.id,  function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
//import express
var express = require('express');

//create router
var router = express.Router();

//import burger to use database functions
var burger = require('./models/burger.js');

//create our routes
router.get("/", function (req, res) {
    burger.selectAll(function (data) { 
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        
    })
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burgerName", 
    ], [
      req.body.burgerName,
    ], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });
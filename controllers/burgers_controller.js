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
        res.render("index", burgerObject);
        
    })
});

//create a burger
router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burgerName", 'devoured'
    ], [
      req.body.burgerName, req.body.devoured
    ], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });

  // Set burger to be devoured.
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
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
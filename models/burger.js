var orm = require('../config/orm.js');

var burger = {

    selectAll: function (cb) {
        orm.selectAll('burgers',function(res){
            cb(res);
        });
    },

    //insert a burger
    insertOne: function (burgerName,cb) {
        orm.insertOne('burgers','burger_name',burgerName[0],function(res){
            cb(res);
        });
    },

    //update burger
   updateOne: function(burgerName,condition,cb) 
   {orm.updateOne('burgers','burger_name',burgerName,condition,function(res){
       cb(res);
   });}
}

module.exports = burger;
var orm = require('./config/orm.js');

var burger = {

    selectAll: function () {
        orm.selectAll('burgers');
    },

    //insert a burger
    insertOne: function (burgerName) {
        orm.insertOne('burgers','burger_name',burgerName);
    },

    //update burger
   updateOne: function(burgerName,id) 
   {orm.updateOne('burgers','burger_name',burgerName,id);}
}

module.exports = burger;
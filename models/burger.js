var orm = require('./config/orm.js');

var burger = {

    selectAll: function () {
        orm.selectAll('burgers');
    },

    //insert a burger
    insertone: function (burgerName) {
        orm.insertOne('burgers','burger_name',burgerName);
    },

    //update burger
   updateone: function(burgerName,id) 
   {orm.updateOne('burgers','burger_name',burgerName,id);}
}

module.exports = burger;
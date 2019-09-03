var orm = require('./config/orm.js');

var burger = {

    selectAll: function () {
        orm.selectAll('burger_db');
    },

    //insert a burger
    insertone: function (burgerName) {
        orm.insertOne('burger_db','',burgerName);
    },

    //update burger
    orm.updateOne();
}

module.exports = burger;
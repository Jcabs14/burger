var connection = require("./connection.js");

var orm = {
    selectAll: function (table,cb) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function (err, results) {
            if (err) throw err;
            console.log(results);
            cb(results);
        });
    },
    insertOne: function (table, column, value,cb) {
        var queryString = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(queryString, [table, column, value], function (err, results) {
            if (err) throw err;
            console.log(results);
            cb(results);
        });
    },
    updateOne: function (table, column, value, condition,cb) {
        var queryString = 'UPDATE ?? SET ?? = ?? WHERE condition = ??';
        connection.query(queryString, [table, column, value, condition], function (err, results) {
            if (err) throw err;
            console.log(results);
            cb(results);
        });
    },
}

module.exports = orm;
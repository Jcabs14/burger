var connection = require("./connection.js");

var orm = {
    selectAll: function (table) {
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function (err, results) {
            if (err) throw err;
            console.log(results);
        });
    },
    insertOne: function (table,column,value) {
        var queryString = 'INSERT INTO ??(??) VALUES(??)';
        connection.query(queryString, [table,column,value], function (err, results) {
            if (err) throw err;
            console.log(results);
        });
    },
    updateOne: function (table,column,value,id) {
        var queryString = 'UPDATE ?? SET ?? = ?? WHERE id = ??';
        connection.query(queryString, [table,column,value,id], function (err, results) {
            if (err) throw err;
            console.log(results);
        });
    },
}
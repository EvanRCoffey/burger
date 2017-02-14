var connection = require('./connection.js');

var orm = {
	// * `selectAll()`
  selectAll: function(database_name, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [database_name], function(err, result) {
      cb(result);
    });
  },
  // * `insertOne()` 
  insertOne: function(database_name, newObj, cb) {
    var queryString = "INSERT INTO ?? SET ?";
    console.log(queryString);
    connection.query(queryString, [database_name, newObj], function(err, result) {
      cb(result);
    });
  },
  // * `updateOne()`
  updateOne: function(database_name, newObj, objWithTargetId, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    connection.query(queryString, [database_name, newObj, objWithTargetId], function(err, result) {
      cb(result);
    });
  }
};

module.exports = orm;
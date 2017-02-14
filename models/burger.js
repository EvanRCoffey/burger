var orm = require('../config/orm.js');

var burgers = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
		  cb(res);
		});
	},
	insertOne: function(newObj, cb) {
		orm.insertOne("burgers", newObj, function(res) {
		  cb(res);
		});
	},
	updateOne: function(newObj, objWithTargetId, cb) {
		orm.updateOne("burgers", newObj, objWithTargetId, function(res) {
		  cb(res);
		});
	},
}

// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;
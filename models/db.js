var mongoose = require('mongoose');
var Schema = mongoose.Schemea;
var dbURL = 'mongodb://mongodb://localhost:27018/test';

mongoose.connection.on('connected', function() {
	console.log('Mongoose connected on' + dbURL);
})

mongoose.connection.on('error', function(err) {
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});
process.on('SIGINT', function() {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through app termination');
		process.exit(0);
	});
});
module.exports = db;

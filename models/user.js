var db = require('./db');
var Schema = db.Schema;
var UserSchema = new Schema({
	username: String,
	password: String
})
var User = db.mongoose.model('User', UserSchema);
var UserDAO = function(){
};
module.exports = new MovieDAO();

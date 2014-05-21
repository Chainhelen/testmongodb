
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.Auth = function(req, res, next){
	if(!res.locals.user){
		res.render('index',{
			title: 'ERROR',
			think: '错了，错了，不要乱试'
		})
	}
	next();
}

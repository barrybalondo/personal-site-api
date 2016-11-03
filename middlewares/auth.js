module.exports = function(req, res, next){

  var token = req.query.token

  if(token === process.env.token) {
    next();    
  }
  else 
    res.end('You are not allowed here!', 400);	

}
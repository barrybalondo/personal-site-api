var express  = require('express');        
var app = express();
var mongoose = require('mongoose');                 
var postController = require('./controllers/postController');
var readController = require('./controllers/readController');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true }));

var port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB);

var postRouter = express.Router();
var readRouter = express.Router();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

postController(postRouter, app);
readController(readRouter, app);

app.listen(port);
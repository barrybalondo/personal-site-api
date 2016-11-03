var express  = require('express');        
var app = express();
var mongoose = require('mongoose');                 
var config = require('./config');
var postController = require('./controllers/postController');

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true }));

var port = process.env.PORT || 5000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB);

var postRouter = express.Router();
postController(postRouter, app);


app.listen(port);
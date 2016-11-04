var Posts = require('../models/postsModel');
var auth = require('../middlewares/auth');

module.exports = function(router, app) {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  router.get('/',function(req, res) {
    res.json({ message: 'Welcome back Barry!' });   
  });

  // routes for /post/
  // ----------------------
  router.post('/posts', auth, function(req, res){
    var newPost = Posts({
      title: req.body.title,
      content: req.body.content
      });
      newPost.save(function(err){
        if(err)
          throw err;
        res.send('Success');    
      });
  });
  
  
  router.get('/posts', function(req, res){
      Posts.find({}).
      sort({ createdAt: -1 }).
      exec(function(err, posts){
        if(err)
          throw err;
        res.json(posts);
      });  
  });

  // routes for /post/:post_id
  // ----------------------
  router.get('/posts/:id', function(req, res){
      Posts.findById({ 
        _id: req.params.id 
      }, function(err, post){
        if(err)
          throw err;
        res.json(post);
      })
  });

  // delete a post
  router.delete('/posts/:id', auth, function(req, res){
      Posts.remove({
        _id: req.params.id
      }, function(err,post){
        if(err)
          throw err;
        res.json('Deleted!')
      })
  });

  // for future ref router.routes('').get(function(req,res){}).post(...) is possible

  app.use('/api', router);

}
var Posts = require('../models/postsModel');

module.exports = function(router, app) {

  router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
  });

  // routes for /post/
  // ----------------------
  router.route('/posts')

    // put bear
    .post(function(req, res){
      var newPost = Posts({
      title: req.body.title,
      description: req.body.description
      });
      newPost.save(function(err){
        if(err)
          throw err;
        res.send('Success');    
      });
    })
 
    // get all post ascending
    .get(function(req, res){
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
  router.route('/posts/:id')

    // get single post
    .get(function(req, res){
      Posts.findById({ 
        _id: req.params.id 
      }, function(err, post){
        if(err)
          throw err;
        res.json(post);
      })
    })

    // delete a post
    .delete(function(req, res){
      Posts.remove({
        _id: req.params.id
      }, function(err,post){
        if(err)
          throw err;
        res.json('Deleted!')
      })
    });

  app.use('/api', router);

}
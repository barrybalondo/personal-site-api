var Reads = require('../models/readModel');
var auth = require('../middlewares/auth');

module.exports = function(router, app) {

  router.post('/reads', auth, function(req, res){
    var newRead = Reads({

      title: req.body.title,
      preview: req.body.preview,
      author: req.body.author,
      url: req.body.url,
      createdAt: req.body.createdAt

      });
      newRead.save(function(err){
        if(err)
          throw err;
        res.send('Success');    
      });
  });

  router.get('/reads', function(req, res){
      Reads.find({}).
      sort({ createdAt: -1 }).
      exec(function(err, reads){
        if(err)
          throw err;
        res.json(reads);
      });  
  });

  router.delete('/reads/:id', auth, function(req, res){
      Reads.remove({
        _id: req.params.id
      }, function(err,read){
        if(err)
          throw err;
        res.json('Deleted!')
      })
  });


  app.use('/api', router);

}
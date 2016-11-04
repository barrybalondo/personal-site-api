var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    content: String },
    { timestamps: true
})

var Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;
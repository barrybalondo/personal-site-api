var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    description: String },
    { timestamps: true
})

var Posts = mongoose.model('Posts', postSchema);

module.exports = Posts;
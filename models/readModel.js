var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var readSchema = new Schema({
    title: String,
    preview: String,
    author: String,
    url: String,
    createdAt: String
})

var Reads = mongoose.model('Reads', readSchema);

module.exports = Reads;
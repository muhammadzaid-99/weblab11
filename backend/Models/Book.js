const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: Date,
    status: String,
    thumbnailUrl: String,
    authors: [String],
    categories: [String]
}, {
    collection: 'book'
});

module.exports = mongoose.model('Book', bookSchema);

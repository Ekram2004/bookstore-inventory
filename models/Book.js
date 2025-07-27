const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  stock: {
    type: Number,
    default: 0,
    min: [0, "Stock cannot be negative"],
  },
  price: {
    type: Number,
    min: [0, "Stock cannot be negative"],
  },
  publishedDate: {
    type: Date,
  },
});

module.exports = mongoose.model('Book', bookSchema);

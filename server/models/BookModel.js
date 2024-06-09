const mongoose = require("mongoose");

// creating a Schema for Book

const bookSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
 
  image: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  
});

module.exports = new mongoose.model("booksDetail", bookSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is required"
  },
  authors:{
    type: String,
    trim: true,
    required: "Author is required"
  },
  description: {
    type: String,
    trim: true,
    required: "Description is required"
  },
  image: {
    type: String
  },
  link: {
    type: String,
  },
})

const Book = mongoose.model("Book", BookSchema)

module.export = Book;
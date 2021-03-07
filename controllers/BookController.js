const { Book } = require("../models");

module.exports = {
  getOne: async (req, res) => {
    try {
      const findBook = await Book.findById(req.params.id);
      // res.send("success from getOne")
      res.json(findBook);
    } catch (error) {
      console.log("error with getOne:", error);
    }
  },

  getAll: async (req, res) => {
    try {
      const allBooks = await Book.find();
      res.json(allBooks);
    } catch (error) {
      console.log("error with getAll:", error);
    }
  },

  postBook: async (req, res) => {
    try {
      const newPost = new Book({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link,
      });
      res.json(await newPost.save());
    } catch (error) {
      console.log("error with postBook:", error);
    }
  },

  updateThatBook: async (req, res) => {
    try {
      const updateBook = await Book.findOneAndUpdate({ _id: req.params.id });
      res.json(updateBook);
    } catch (error) {
      console.log("error with updateThatBook:", error);
    }
  },

  removeThatBook: async (req, res) => {
    try {
      const removeBook = await Book.findById({ _id: req.params.id })
      res.json(removeBook)
    } catch (error) {
      console.log("error with removeThatBook:", error)
    }
  }
};

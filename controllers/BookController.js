const { Book } = require("../models");

module.exports = {
  getOne: async (req, res) => {
    try {
      const findBook = await Book.findById(req.params.id);
      // res.send("success from getOne")
      res.json(findBook);
    } catch (error) {
      console.log("error with getOne:", error);
      res.send(error)
    }
  },

  getAll: async (req, res) => {
    try {
      const allBooks = await Book.find();
      res.json(allBooks);
    } catch (error) {
      console.log("error with getAll:", error);
      res.send(error)
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
      res.send(error)
    }
  },

  updateThatBook: async (req, res) => {
    try {
      const updateBook = await Book.findOneAndUpdate({ _id: req.params.id });
      res.json(updateBook);
    } catch (error) {
      console.log("error with updateThatBook:", error);
      res.send(error)
    }
  },

  removeThatBook: async (req, res) => {
    try {
      const removeBook = await Book.findByIdandDelete({ _id: req.params.id });
      res.json(removeBook);
    } catch (error) {
      console.log("error with removeThatBook:", error);
      res.send(error)
    }
  },
};

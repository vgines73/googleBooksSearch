const { Book } = require("../models");

module.exports = {
  // testing to see connection to backend
  // test: (req, res) => {
  //   res.send("success from backend");
  // },
  // get one book by id
  getOneBook: async (req, res) => {
    try {
      const findBook = await Book.findById(req.params.id);
      // res.send("success from getOne")
      res.json(findBook);
    } catch (error) {
      console.log("error with getOne:", error);
      res.send(error);
    }
  },
  // get all books
  getAllBooks: async (req, res) => {
    try {
      const allBooks = await Book.find();
      console.log(allBooks)
      res.json(allBooks);
    } catch (error) {
      console.log("error with getAll:", error);
      res.send(error);
    }
  },
  // post a book
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
      res.send(error);
    }
  },
  // updating a book by id
  updateThatBook: async (req, res) => {
    try {
      const updateBook = await Book.findById(req.params.id);
      const { title, authors, description, image, link } = req.body;
      // if they only update one of the values
      if (title) updateBook.title = title;
      if (authors) updateBook.authors = authors;
      if (description) updateBook.description = description;
      if (image) updateBook.image = image;
      if (link) updateBook.link = link;

      res.json(await updateBook.save());
    } catch (error) {
      console.log("error with updateThatBook:", error);
      res.send(error);
    }
  },
  // deleting a book by id
  removeThatBook: async (req, res) => {
    try {
      const removeBook = await Book.findByIdAndDelete(req.params.id);
      res.json(removeBook);
    } catch (error) {
      console.log("error with removeThatBook:", error);
      res.send(error);
    }
  },
};

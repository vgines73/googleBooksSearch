const { Book } = require("../models")


module.exports = {
  test: (req, res) => {
    res.send("success from backend")
  },

  getAll: async () => {
    res.send(await Book.find())
  }
}
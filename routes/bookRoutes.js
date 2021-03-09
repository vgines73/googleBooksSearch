const router = require("express").Router();
const {
  // test,
  getOneBook,
  getAllBooks,
  postBook,
  updateThatBook,
  removeThatBook,
} = require("../controllers/BookController");

router.route("/")
// .get(test)
.get(getAllBooks)
.post(postBook);

router.route("/:id").get(getOneBook).patch(updateThatBook).delete(removeThatBook);

module.exports = router;

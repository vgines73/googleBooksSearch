const router = require("express").Router();
const {
  getOne,
  getAll,
  postBook,
  updateThatBook,
  removeThatBook,
} = require("../controllers/BookController");

router.route("/").get(getAll).post(postBook)

router.route("/:id").get(getOne).patch(updateThatBook).delete(removeThatBook)

module.exports = router;

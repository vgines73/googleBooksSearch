const router = require("express").Router();
const {
  // test,
  getOne,
  getAll,
  postBook,
  updateThatBook,
  removeThatBook,
} = require("../controllers/BookController");

router.route("/")
// .get(test)
.get(getAll)
.post(postBook);

router.route("/:id").get(getOne).patch(updateThatBook).delete(removeThatBook);

module.exports = router;

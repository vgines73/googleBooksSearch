const router = require("express").Router();
const {
  getOne,
  getAll,
  postBook,
  updateThatBook,
  removeThatBook,
} = require("../controllers/BookController");

router.get("/:id", getOne);

router.get("/", getAll);

router.post("/", postBook);

router.patch("/:id", updateThatBook);

router.delete("/:id", removeThatBook);

module.exports = router;

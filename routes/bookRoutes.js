const router = require("express").Router();
const {
  getOne,
  getAll,
  postBook,
  updateThatBook,
  removeThatBook,
} = require("../controllers/BookController");

router.get("/", getOne);

router.get("/", getAll);

router.post("/", postBook);

router.update("/", updateThatBook);

router.delete("/", removeThatBook);

module.exports = router;

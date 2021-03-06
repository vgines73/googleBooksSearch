const router = require("express").Router();
const { test, getAll } = require("../controllers/BookController")
router.get("/", test)

router.get("/", getAll)

module.exports = router
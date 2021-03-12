// bring in dependencies and set up port
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv").config()

// bring in connection
require("./models/connection");

// for middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup for heroku
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// custom routes
app.use("/api/books", require("./routes/bookRoutes"));


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on PORT: http://localhost:${PORT}`);
});

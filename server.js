const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;


require("./models/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// custom routes
app.use("/book", require("./routes/bookRoutes"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on PORT: http://localhost:${PORT}`);
});

//jshint esversion:6
const
  express = require("express"),
  bodyParser = require("body-parser"),
  ejs = require("ejs"),
  mongoose = require("mongoose"),

  app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb+srv://admin-coco:iEtN5J6VkkuVvYs@cluster0.hlfd76j.mongodb.net/userDB")

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});


app.listen(3000, () => {
  console.log("Server started on port 3000.");
});

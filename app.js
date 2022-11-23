//Technical Dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const session = require("express-session");

//Main Router
const mainRouter = require("./routers/mainRouter");

//PORT Configurations
const PORT = process.env.PORT || 3000;

//Parsing Request Body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({secret:"RKSecret",resave:false,saveUninitialized:false}))

app.set("view engine", "ejs");
app.set("views", "views");

//Request Filter and Sanitizer
app.use((req, res, next) => {
  next();
});

//Main Router Set
app.use(mainRouter);

//App Loader
app.listen(PORT, () => {
  console.log("Yoms APP Server is Online!");
});

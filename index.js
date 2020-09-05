const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require("./Members");

const app = express();

// app.get("/", (req, res) => {
//   /*
//   res.send("<h1>Hello World!</h1>");
//   */

//   /*
//   res.sendFile(path.join(__dirname, "public", "index.html"));
//   */
// });

// Init middleware (function) for logging
/*
app.use(logger);
*/
// Init Handlerbars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Init Body Parser middleware
app.use(express.json());
// Init middleware for handling form submissions
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get("/", (req, res) =>
  res.render("index", { title: "Member App", members })
);

// Simple REST API
app.use("/api/members", require("./routes/api/members"));

// Set static folder
/*
can go to
- localhost:5000/
- localhost:5000/about.html
*/
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

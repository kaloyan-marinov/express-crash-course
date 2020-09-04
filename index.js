const express = require("express");
const path = require("path");
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

// Init middleware (function)
/*
app.use(logger);
*/

// Simple REST API
app.get("/api/members", (req, res) => res.json(members));

app.get("/api/members/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Set static folder
/*
can go to
- localhost:5000/
- localhost:5000/about.html
*/
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

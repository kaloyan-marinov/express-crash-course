const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");

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

const express = require("express");
const path = require("path");

const app = express();

// app.get("/", (req, res) => {
//   /*
//   res.send("<h1>Hello World!</h1>");
//   */

//   /*
//   res.sendFile(path.join(__dirname, "public", "index.html"));
//   */
// });

// Set static folder
/*
can go to
- localhost:5000/
- localhost:5000/about.html
*/
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

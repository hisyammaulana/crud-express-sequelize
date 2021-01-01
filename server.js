const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");

const app = express();

// var corsOptions = {
//   origin: "http://localhost:2001",
// };

// app.use(cors(corsOptions));

// parse request of content-type - application/json
app.use(bodyParser.json());

// parse request of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// sequalize
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db");
});

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Learn Node Express with Sequalize Mysql",
  });
});

require("./app/routes/tutorial.routes.js")(app);

// set port, listen for request
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const randomUsersRoute = require("./routes/random-users.route");
const allUsersRoute = require("./routes/all-users.route");
const saveUser = require("./routes/save-user.route");
const errorHandler = require("./middleware/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
// app.set("view engine", "ejs");

// app.use(viewCount);


// Apply the rate limiting middleware to all requests
// app.use(limiter);

app.use("/user/random", randomUsersRoute);

app.use("/user/all", allUsersRoute);

app.use("/user", allUsersRoute);

app.use("/user/save", saveUser);

app.all("*", (req, res) => {
  res.send("NO route found.");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
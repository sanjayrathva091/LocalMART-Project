const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { Connection } = require("./db");
const { userRouter } = require("./Routes/User.Route");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

/* Welcome Page */
app.get("/", (req, res) => {
  res.send("Welcome To Local Mart Server");
});

/* User Router */
app.use("/users", userRouter);

/* For Listening PORT */
app.listen(port, async () => {
  Connection();
  console.log(`Server started on port ${port}`);
});

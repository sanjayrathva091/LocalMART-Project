const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { Connection } = require("./db");
const { userRouter } = require("./Routes/User.Route");
const { productRouter } = require("./Routes/Product.Route");
const { cartRouter } = require("./Routes/Cart.Route");

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

/* Product Router */
app.use("/products", productRouter);

/* Cart Router */
app.use("/carts", cartRouter);

/* For Listening PORT */
app.listen(port, async () => {
  Connection();
  console.log(`Server started on port ${port}`);
});

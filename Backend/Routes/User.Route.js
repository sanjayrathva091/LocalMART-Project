const express = require("express");
const { UserModel } = require("../Models/User.Model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserAuth } = require("../Middlewares/UserAuth.Middleware");
require("dotenv").config();

const userRouter = express.Router();
userRouter.use(express.json());

/* For New User */

userRouter.post("/register", async (req, res) => {
  const {
    first_name,
    last_name,
    age,
    gender,
    address,
    pincode,
    phone,
    email,
    password,
    isUser,
    isAdmin,
  } = req.body;
  /* Checking All The Required Fields */
  if (
    first_name &&
    last_name &&
    age &&
    gender &&
    address &&
    pincode &&
    phone &&
    email &&
    password
  ) {
    /* Validate User */
    const ValidatorUser = await UserModel.findOne({ email: email });
    if (ValidatorUser) {
      res.send({
        message: "Please Enter Another Email This Email Is Already In Use",
      });
    } else {
      try {
        /* Protect The User Password With The Help Of Bcrypt It Convert Your Password To Hash Password Which Is Stored In Our DataBase */
        bcrypt.hash(password, 8, async (err, hash_password) => {
          if (err) {
            console.log(err);
          } else {
            const user = new UserModel({
              first_name,
              last_name,
              age,
              gender,
              address,
              pincode,
              phone,
              email,
              password: hash_password,
              isUser,
              isAdmin,
            });
            await user.save();
            res.send({ message: "User Register Successfully" });
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    res.send({ message: "Please Fill All The Fields" });
  }
});

/* For Login */

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  /* Checking Required Fields */
  if (email && password) {
    try {
      /* We Are Checking Your Mail Is In DataBase Or Not */
      const user = await UserModel.findOne({ email });
      if (user) {
        /* Compare My Hash Password With The Help Of Bcrypt.compare */
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            /* Generate The Token With Help Of JWT It Gives You One Token When Ever User Is Login */
            const token = jwt.sign({ userID: user._id }, process.env.JWTKey);
            // console.log(user);
            res.send({
              message: "Login Successfully",
              token: token,
              isUser: user.isUser,
              isAdmin: user.isAdmin,
            });
          } else {
            res.send({ message: "Please Enter Correct Password" });
          }
        });
      } else {
        res.send({ message: "Email Not Found" });
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    res.send({ message: "Please Fill All The Fields" });
  }
});

/* For Getting The User Data And This Route Is Only Work For Admin Other People's Can't Use This Route */

userRouter.get("/", UserAuth, async (req, res) => {
  try {
    let { q } = req.query;

    let user = await UserModel.find({
      $or: [
        { first_name: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } },
        { gender: q.includes("fe") ? "Female" : "Male" },
      ],
    });

    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  userRouter,
};

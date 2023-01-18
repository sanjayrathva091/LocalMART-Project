const mongoose = require("mongoose");
require("dotenv").config();

const DataBaseURL = process.env.MongoURL;

const Connection = () => {
  mongoose
    .connect(DataBaseURL)
    .then(() => {
      console.log({ message: "Connection Successfully!" });
    })
    .catch((error) => {
      console.log({ message: "Connection Error!", error });
    });
};

module.exports = { Connection };

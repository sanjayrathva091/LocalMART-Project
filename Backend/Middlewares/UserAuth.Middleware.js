const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserAuth = (req, res, next) => {
  const token = req.headers.authorization || null;
  /* Checking Token Is There Or Not */
  if (token) {
    /* Verify Our Token With The Help Of jwt.verify */
    jwt.verify(token, process.env.JWTKey, (err, decoded) => {
      if (err) {
        res
          .status(401)
          .send({ message: "Invalid Token Please Login Again", err });
      } else {
        const userID = decoded.userID;
        req.userID = userID;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "Please Login First" });
  }
};

module.exports = {
  UserAuth,
};

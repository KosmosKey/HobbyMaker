const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (res, req, next) => {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(400).json({ message: "Did not authenticate token!" });
  const verify = jwt.verify(token, process.env.JWT_SECRET);
  if (!verify)
    return res.status(400).json({ message: "Could not verify the token" });
  req.user = verify.id;
  next();
};

module.exports = auth;

const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) return res.json({ message: "Did not authenticate the token" });
  const verify = jwt.verify(token, process.env.JWT_SECRET);
  if (!verify) return res.json({ message: "Didn't verify" });
  req.user = verify;
  next();
};

module.exports = auth;

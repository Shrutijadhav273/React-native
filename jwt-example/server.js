const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SECRET_KEY = "mysecretkey";

// Dummy user (no database)
const user = {
  id: 1,
  email: "test@gmail.com",
  password: "123456"
};


// 🔐 LOGIN API
app.get("/login", (req, res) => {
  res.send("Use POST request to login");


  if (email === user.email && password === user.password) {
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});


// 🔒 Middleware
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).json({ message: "No token" });

  try {
    const verified = jwt.verify(token, SECRET_KEY);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};


// 🔐 Protected Route
app.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Welcome!",
    user: req.user
  });
});


app.listen(5000, () => console.log("Server running on port 5000"));
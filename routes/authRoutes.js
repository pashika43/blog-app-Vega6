const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// for the signup
router.post("/signup", upload.single("profileImage"), async (req, res) => {
  const { name, email, password } = req.body;

  const profileImage = req.file.filename;

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ msg: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);


    const user = await User.create({ name, email, password: hashed, profileImage });


    res.status(201).json({ msg: "User created" });


  } catch (err) {
    res.status(500).json({ msg: "Signup error", error: err.message });
    
  }
});



// for login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });



    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ msg: "Invalid credentials" });



    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });


    res.json({ token, user: { profileImage: user.profileImage } });
  } catch (err) {
    res.status(500).json({ msg: "Login error", error: err.message });


  }
});

module.exports = router;

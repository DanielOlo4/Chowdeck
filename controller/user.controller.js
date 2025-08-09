const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const registerUser = async(req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser };

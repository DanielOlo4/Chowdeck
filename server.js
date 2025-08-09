const express = require("express");
const cors = require("cors");
const connectDB = require("../customer/DataBase/dbConnection");


require("dotenv").config();
// load .env values

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Start DB and Server


app.get("/", (req, res) => {
  res.send("Welcome to Chowdeck 👋");
});


// Start server
const PORT = 9000;
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

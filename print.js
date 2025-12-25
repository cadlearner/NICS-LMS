



// BACKEND SETUP & AUTH APIs 
// TARGET 
// A working backend server
// MongoDB connected
// User model created
// Auth routes working:
// Register
// Login
// JWT-based authentication
// Auth middleware protecting routes

// PROCEDURE
// Backend folder setup
// Express server setup
// MongoDB connection
// User model
// Auth routes
// Auth controller
// JWT middleware
// Testing with Postman

// BACKEND FOLDER SETUP
// server/
//  ├── config/
//  ├── controllers/
//  ├── middleware/
//  ├── models/
//  ├── routes/
//  ├── utils/
//  ├── app.js
//  ├── server.js
//  └── package.json
//  ├── .env

// GIT SETUP (In Root)
// git --version
// git config --global user.name "Ashish Singh"
// git config --global user.email "your-email@gmail.com"
// git init
// create .gitignore in it
// node_modules
// client/node_modules
// server/.env

// git status
// git add .
// git commit -m "Initial project setup"
// create a public repo NICS-LMS in GitHub

// git remote add origin git@github.com:cadlearner/NICS-LMS.git
// git branch -M main
// git push -u origin main

// PROFESSIONAL HABITS (VERY IMPORTANT)
// Commit small & clean
// Push daily
// Never push broken code
// Never commit .env
// Read your commit message before pressing Enter

// in server folder 
// npm init -y 
// npm install express mongoose dotenv bcryptjs jsonwebtoken cors
// npm install --save-dev nodemon

// USAGE OF PACKAGES
// express → server
// mongoose → MongoDB
// dotenv → environment variables
// bcryptjs → password hashing
// jsonwebtoken → JWT auth
// cors → frontend access later
// nodemon → auto restart

// BASIC SERVER SETUP 
// in server/app.js
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("NICS LMS API is running");
});

export default app;

// in server/.env
PORT=5001
MONGO_URI=mongodb+srv://nicsadmin:password@cluster0.xiapnsr.mongodb.net/NICS-LMS?retryWrites=true&w=majority

// in server/server.js
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Why separate app.js and server.js?
// app.js → app config
// server.js → app start
// This helps testing & scaling.

// in config create a file db.js
// in db.js
import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
export default connectDB;

// updating server.js to connect DB
import connectDB from "./config/db.js";
connectDB();

// add "type": "module", in server/package.json to enable ES6 modules

// in server/terminal
// npm start
// server is running on port 5001 | mongodb connected


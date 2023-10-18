const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes import
const authRoutes = require("./routes/auth");

const app = express();

mongoose
    .connect("mongodb://127.0.0.1/blogapp")
    .then(() => {
        console.log("DATABASE CONNECTION ESTABLISHED SUCCESSFULLY");
    })
    .catch((err) => {
        console.log("ERROR CONNECTING DATABASE..", err);
    })

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/auth/", authRoutes);

const portNo = 8000;

app.listen(portNo, () => console.log(`Server is up and running on port ${portNo}`));
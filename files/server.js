"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", handelHomePage);
app.get("/api", handelApiPage);

function handelHomePage(req, res) {
    res.status(200).json("Welcome To Home Page");
}

function handelApiPage(req, res) {
    res.status(200).json("Welcome to Api Page");
}
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Up and running on port: 3000");
});

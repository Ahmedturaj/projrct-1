// const express = require("express");
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

// middleware

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Happy Express");
});

export default app;

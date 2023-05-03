import dotenv from "dotenv";
import express from "express";
import getConnection from "./core/db/connection.js";

getConnection();
dotenv.config();

const app = express();
const PORT = 4000;

app.get("/", function (req, res) {
  res.send("Excercie Tracker api bya Jasnel.dev");
});

app.listen(PORT);

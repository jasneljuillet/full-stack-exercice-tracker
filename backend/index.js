import dotenv from "dotenv";
import express from "express";
import getConnection from "./core/db/connection.js";

const app = express();
const PORT = 4000;

// create new user
import addUser from "./api/user/user.js";
app.post("/api/users", (req, res) => addUser(req, res));

getConnection();
dotenv.config();

app.get("/", function (req, res) {
  res.send("Excercie Tracker api bya Jasnel.dev");
});

app.listen(PORT);

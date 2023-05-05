import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

import getConnection from "./core/db/connection.js";
getConnection();
dotenv.config();

const app = express();
app.use(bodyParser.json());
const PORT = 4000;

// create new user
import user from "./api/user/user.js";
app.post("/api/users", (req, res) => user.addUser(req, res));
// get all users
app.get("/api/users", (req, res) => user.alllUsers(req, res));

// create new exercice
import exercice from "./api/exercice/exercice.js";
app.post("/api/users/:id/exercises", (req, res) =>
  exercice.addExercice(req, res)
);

app.get("/", function (req, res) {
  res.send("Excercie Tracker api bya Jasnel.dev");
});

app.listen(PORT);

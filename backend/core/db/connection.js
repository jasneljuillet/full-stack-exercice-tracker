import mongoose from "mongoose";

import dbUri from "./db.js";

const getConnection = async () => {
  await mongoose
    .connect(dbUri)
    .then(() => console.log("Connected"))
    .catch((err) => console.log(err));
};

export default getConnection;

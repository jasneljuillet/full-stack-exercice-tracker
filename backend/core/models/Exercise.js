import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  duration: {
    type: Number,
    require: true,
  },
  date: {
    type: String,
    default: new Date().toUTCString().slice(5, 16),
  },
});

const Exercice = mongoose.model("Exercice", schema);
export default Exercice;

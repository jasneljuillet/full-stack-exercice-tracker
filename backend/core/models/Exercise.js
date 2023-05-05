import mongoose from "mongoose";

const schema = new mongoose.Schema({
  username: {
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
    default: "",
  },
});

const Exercice = mongoose.model("Exercice", schema);
export default Exercice;

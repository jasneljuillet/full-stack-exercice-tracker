import mongoose from "mongoose";

const schema = mongoose.Schema({
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
  date: new Date().now(),
});

const Exercice = mongoose.model("Exercice", schema);
export default Exercice;

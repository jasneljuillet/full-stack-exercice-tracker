import mongoose from "mongoose";

const schema = new mongoose.Schema({
  username: { type: String, required: true },
  log: [
    {
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
    },
  ],
});

const User = mongoose.model("User", schema);
export default User;

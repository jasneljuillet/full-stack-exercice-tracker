import User from "../../core/models/User.js";

const addUser = async (req, res) => {
  await new User(req.body)
    .save()
    .then((user) => res.send({ _id: user._id, username: user.username }))
    .catch((err) => res.send(err));
};

const alllUsers = async (req, res) => {
  await User.find({}).then((users) => res.send(users));
};

export default {
  addUser,
  alllUsers,
};

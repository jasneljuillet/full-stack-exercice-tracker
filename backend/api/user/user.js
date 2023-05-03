import User from "../../core/models/User.js";

const addUser = async (req, res) => {
  await new User(req.body)
    .save()
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
};

export default addUser;

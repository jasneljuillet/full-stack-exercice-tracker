import Exercice from "../../core/models/Exercise.js";
import User from "../../core/models/User.js";

const addExercice = async (req, res) => {
  const { _id } = req.body;
  const { date, description, duration } = req.body;

  await User.findByIdAndUpdate(
    { _id },
    { $push: { log: { description, duration, date } } },
    {
      new: true,
    }
  )
    .then(async (update) => {
      const a = update.log[update.log.length - 1];
      const lastExercice = {
        _id: a._id,
        username: update.username,
        description: a.description,
        duration: a.duration,
        date: a.date,
      };
      res.send(lastExercice);
    })
    .catch((err) => res.send(err));
};

export default { addExercice };

// TODO: Import admin model
const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

module.exports = {
  getAllUsers,
};


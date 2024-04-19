const userModel = require("../model/user-model");

const getAllUsers = async (req, res) => {
  const users = await userModel.find();

  if (users.length === 0) {
    return res.status(404).json({
      success: false,
      msg: "users not found",
    });
  }
  return res.status(200).json({
    success: true,
    msg: "users found",
    data: users,
  });
};
module.exports = { getAllUsers };

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
    msg: "users are found",
    data: users,
  });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  // const user = await userModel.findById({_id:id});
  const user = await userModel.findById(id);
  if (!user) {
    return res.sataus(404).json({
      success: false,
      msg: "User Not found",
    });
  }
  return res.status(200).json({
    success: true,
    msg: "user found  by their id",
    data: user,
  });
};

const createNewUser = async (req, res) => {
  const { data } = req.body;
  if (!data) {
    res.status(404).json({
      success: false,
      msg: "no data added",
    });
  }
  await userModel.create(data);
  const allUsers = await userModel.find();
  return res.status(200).json({
    success: true,
    msg: "Added Book successfully",
    data: allUsers,
  });
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.deleteOne({ _id: id });
  if (!user) {
    return res.status(404).json({
      success: false,
      msg: "user not foound",
    });
  }
  return res.status(200).json({
    success: true,
    msg: "user found",
    data: user,
  });
};

const updataUserdata = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  if (!data) {
    return res.status(404).json({
      success: false,
      msg: "no updated data here",
    });
  }

  const updatedUser = await userModel.findOneAndUpdate(
    { _id: id },
    { $set: { ...data } },
    {
      new: true,
    }
  );
  return res.status(200).json({
    success: true,
    msg: "updated data",
    data: updatedUser,
  });
};
module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  deleteUser,
  updataUserdata,
};

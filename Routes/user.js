const express = require("express");
const {
  getAllUsers,
  getUserById,
  addUserData,
  deleteUser,
  updataUserdata,
  createNewUser,
} = require("../controllers/user-controller");

// const { UserModel, BookModel } = require("../model/index");
const userModel = require("../model/user-model");
const bookModel = require("../model/book-model");

const router = express.Router();
const port = 8001;

// router.get("/", getAllUsers);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createNewUser);
router.delete("/:id", deleteUser);
router.put("/:id", updataUserdata);

module.exports = router;

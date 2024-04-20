// const { UserModel, BookModel } = require("../model/index");
const bookModel = require("../model/book-model");
const userModel = require("../model/user-model");
const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
  addNewBook,
  updateBookById,
} = require("../controllers/bookcontroller");

const router = express.Router();
const port = 8001;

router.get("/", getAllBooks);

router.get("/:id", getSingleBookById);
router.get("/issued/by-user", getAllIssuedBooks);
router.post("/", addNewBook);
router.put("/updateBook/:id", updateBookById);

module.exports = router;

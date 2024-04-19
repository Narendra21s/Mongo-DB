const { UserModel, BookModel } = require("../modals/index");
const express = require("express");
const {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
} = require("../controllers/bookcontroller");

const router = express.Router();
const port = 8001;

router.get("/", getAllBooks);

router.get("/:id", getSingleBookById);
router.get("/issued/by-user", getAllIssuedBooks);

const express = require("express");
const { getAllBooks } = require("../controllers/bookcontroller");
const { UserModel, BookModel } = require("../modals/index");

const router = express.Router();
const port = 8001;

router.get("/", getAllBooks);

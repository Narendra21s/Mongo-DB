// const { UserModel, BookModel } = require("../model/index");
const BookModel = require("../model/book-model");
const UserModel = require("../model/user-model");
// const issuedBook = require("../DTOs/book- dto");
const IssuedBook = require("../DTOs/book- dto");

// export.getAllBook=()=>{};
const getAllBooks = async (req, res) => {
  const books = await BookModel.find();

  if (books.length === 0) {
    return res.status(404).json({
      success: false,
      msg: "No book found",
    });
  }
  res.status(200).json({
    success: true,
    data: books,
  });
};

const getSingleBookById = async (req, res) => {
  const { id } = req.params;
  const book = await BookModel.findById(id);
  if (!book) {
    return res.status(404).json({
      success: false,
      msg: "Book not find by id",
    });
  }
  return res.status(200).json({
    success: true,
    data: book,
  });
};

const getAllIssuedBooks = async (req, res) => {
  const users = await UserModel.find({
    issuedBook: { $exists: true },
  }).populate("issuedBook");

  // Data Transfer Object (DTO)

  const issuedBooks = users.map((each) => new IssuedBook(each));

  if (issuedBooks.length === 0) {
    return res.status(404).json({
      success: false,
      msg: "No book have issued yet...",
    });
  }
  return res.status(200).json({
    success: true,
    msg: "User with the issued book",
    data: issuedBooks,
  });
};

const addNewBook = async (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res.status(404).json({
      success: false,
      msg: "No data to add  A Book",
    });
  }
  await BookModel.create(data);
  const allBooks = await BookModel.find();
  return res.status(200).json({
    success: true,
    msg: "Added Book successfully",
    data: allBooks,
  });
};

const updateBookById = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;

  const updatedBook = await BookModel.findOneAndUpdate(
    {
      _id: id,
    },
    data,
    { new: true }
  );
  return res.status(201).json({
    success: true,
    msg: "Updated the book data",
    data: updatedBook,
  });
};

module.exports = {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
  addNewBook,
  updateBookById,
};

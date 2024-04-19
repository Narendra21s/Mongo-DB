const { UserModel, BookModel } = require("../modals/index");

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

module.exports = { getAllBooks, getSingleBookById, getAllIssuedBooks };

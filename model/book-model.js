const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: {
      type: string,
      required: true,
    },
    author: {
      type: string,
      required: true,
    },
    price: {
      type: string,
      required: true,
    },
    genre: {
      type: string,
      required: true,
    },
    publisher: {
      type: string,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);

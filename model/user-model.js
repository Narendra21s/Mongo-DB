const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: string,
      required: true,
    },
    surname: {
      type: string,
      required: true,
    },
    email: {
      type: string,
      required: true,
    },
    issuedBook: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: false,
    },
    returnDate: {
      type: string,
      required: false,
    },
    subscriptionDate: {
      type: string,
      required: true,
    },
    subscriptionType: {
      type: string,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);

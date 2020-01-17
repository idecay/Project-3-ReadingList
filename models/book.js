/*
 * Place all functions, classes, and/or DB schemas here for a single
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require("./connection.js");

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database.
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
global.sampleModel = [];

/* Step 2
 *
 * TODO: create model schema
 * NOTE: skip this if you are not using mongoose
 *
 */
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  id: Number,
  description: String,
  image: String
});

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const BookCollection = mongoose.model("Book", BookSchema);

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
const getAllBooks = () => {
  return BookCollection.find();
};

const getBooksByAuthor = author => {
  return BookCollection.findById({ author: author });
};

const getBooksByTitle = title => {
  return BookCollection.findById({ title: title });
};

const getBookById = bookId => {
  return BookCollection.findById(bookId);
};

const addNewBook = newBook => {
  return BookCollection.create(newBook);
};

const updateBook = (bookId, newBook) => {
  return BookCollection.updateOne({ _id: bookId, newBook });
};

const deleteBook = bookId => {
  return BookCollection.deleteOne({ _id: bookId });
};

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllBooks,
  getBooksByAuthor,
  getBooksByTitle,
  addNewBook,
  updateBook,
  deleteBook,
  getBookById
};

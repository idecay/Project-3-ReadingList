const mongoose = require("./connection.js");

global.sampleModel = [];

const sampleDescriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Nullam ac tortor vitae purus faucibus ornare. Viverra aliquet eget sit amet tellus.",
  "Mi eget mauris pharetra et ultrices neque ornare aenean.",
  "Blandit cursus risus at ultrices. In egestas erat imperdiet sed euismod nisi porta.",
  "Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus.",
  "Pulvinar proin gravida hendrerit lectus a.",
  " Enim facilisis gravida neque convallis a."
];

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  id: Number,
  description: String,
  image: String,
  genreId: {
    type: String,
    default: ""
  }
});

const BookCollection = mongoose.model("Book", BookSchema);

function getRandomDescription() {
  return sampleDescriptions[
    Math.floor(Math.random() * sampleDescriptions.length)
  ];
}

const getAllBooks = () => {
  return BookCollection.find();
};

const getBooksByAuthor = author => {
  return BookCollection.findOne({ author: author });
};

const getBooksByTitle = title => {
  return BookCollection.findOne({ title: title });
};

const getBookById = bookId => {
  return BookCollection.findById(bookId);
};

const addNewBook = newBook => {
  if (!newBook.description) {
    newBook.description = getRandomDescription();
  }
  return BookCollection.create(newBook);
};

const updateBook = (bookId, newBook) => {
  return BookCollection.updateOne({ _id: bookId }, newBook);
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

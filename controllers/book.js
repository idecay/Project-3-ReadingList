const express = require("express");

const bookApi = require("../models/book.js");
const genreApi = require("../models/genre.js");

const bookRouter = express.Router();

function getBookId(req, res) {
  const bookId = req.params.bookId;
  return bookId;
}

function getBookTitle(req, res) {
  const bookTitle = req.params.bookTitle;
  return bookTitle;
}

function getBookAuthor(req, res) {
  const bookAuthor = req.params.bookAuthor;
  return bookAuthor;
}

bookRouter.get("/", async (req, res) => {
  try {
    const books = await bookApi.getAllBooks();
    console.log(books);
    return res.json(books);
  } catch (e) {
    console.log(e);
  }
});

bookRouter.get("/:bookId", async (req, res) => {
  const bookId = getBookId(req, res);
  try {
    const book = await bookApi.getBookById(bookId);
    console.log(book);
    return res.json(book);
  } catch (e) {
    console.log(e);
  }
});

bookRouter.get("/:bookAuthor", async (req, res) => {
  const bookAuthor = getBookAuthor(req, res);
  try {
    const books = await bookApi.getBooksByAuthor(bookAuthor);
    console.log(books);
    return res.json(books);
  } catch (e) {
    console.log(e);
  }
});

bookRouter.get("/:bookTitle", async (req, res) => {
  const bookTitle = getBookTitle(req, res);
  try {
    const books = await bookApi.getBooksByTitle(bookTitle);
    console.log(books);
    return res.json(books);
  } catch (e) {
    console.log(e);
  }
});

bookRouter.post("/", async (req, res) => {
  const bookData = req.body;
  try {
    const newBook = await bookApi.addNewBook(bookData);
    console.log(newBook);
    res.json(newBook);
  } catch (e) {
    console.log(e);
  }
});

bookRouter.put("/:bookId", async (req, res) => {
  const bookId = getBookId(req, res);
  const bookData = req.body;
  try {
    await bookApi.updateBook(bookId, bookData);
    const message = `book with bookId: ${bookId} has been updated successfully`;
    console.log(message);
    return res.json(message);
  } catch (e) {
    console.log(e);
  }
});

bookRouter.delete("/:bookId", async (req, res) => {
  const bookId = getBookId(req, res);
  try {
    await bookApi.deleteBook(bookId);
    const message = `book with bookId: ${bookId} has been deleted`;
    console.log(message);
    return res.json(message);
  } catch (e) {
    console.log(e);
  }
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  bookRouter
};

/* Step 1 import express
 *
 */
const express = require("express");

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the
 * controller you need.
 *
 */
const bookApi = require("../models/book.js");

/* Step 3
 *
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const bookRouter = express.Router();

/* Step 4
 *
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */

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
    const books = await creatureApi.getAllBooks();
    console.log(books);
    res.json(books);
    return;
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

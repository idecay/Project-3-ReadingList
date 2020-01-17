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
const GenreSchema = new mongoose.Schema({
  name: String,
  description: String
});

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const GenreCollection = mongoose.model("Genre", GenreSchema);

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
const getAllGenres = () => {
  return GenreCollection.find();
};

const getGenreById = genreId => {
  return GenreCollection.findOne({ _id: genreId });
};

const addNewGenre = newGenre => {
  return GenreCollection.create(newGenre);
};

const updateGenre = (genreId, newGenre) => {
  return GenreCollection.updateOne({ _id: genreId }, newGenre);
};

const deleteGenre = genreId => {
  return GenreCollection.deleteOne({ _id: genreId });
};

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllGenres,
  getGenreById,
  addNewGenre,
  updateGenre,
  deleteGenre
};

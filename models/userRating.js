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
const UserRatingSchema = new mongoose.Schema({
  userName: String,
  rating: Number
});

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
const UserRatingCollection = mongoose.model("UserRating", UserRatingSchema);

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
const getAllUserRatings = () => {
  return UserRatingCollection.find();
};

const getUserRatingById = ratingId => {
  return UserRatingCollection.findById({ _id: ratingId });
};

const addNewRating = newRating => {
  return UserRatingCollection.create(newRating);
};

const updateRating = (ratingId, newRating) => {
  return UserRatingCollection.updateOne({ _id: ratingId }, newRating);
};

const deleteRating = ratingId => {
  return UserRatingCollection.deleteOne({ _id: ratingId });
};

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllUserRatings,
  getUserRatingById,
  addNewRating,
  updateRating,
  deleteRating
};

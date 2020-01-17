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
const userRatingApi = require("../models/userRating.js");

/* Step 3
 *
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const userRatingRouter = express.Router();

/* Step 4
 *
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */

function getRatingId(req, res) {
  const ratingId = req.params.ratingId;
  return ratingId;
}

userRatingRouter.get("/", async (req, res) => {
  try {
    const rating = await userRatingApi.getAllUserRatings();
    console.log(rating);
    return res.json(rating);
  } catch (e) {
    console.log(e);
  }
});

userRatingRouter.get("/:ratingId", async (req, res) => {
  const ratingId = getRatingId(req, res);
  try {
    const rating = await userRatingApi.getUserRatingById(ratingId);
    console.log(rating);
    return res.json(rating);
  } catch (e) {
    console.log(e);
  }
});

userRatingRouter.post("/", async (req, res) => {
  const ratingData = req.body;
  try {
    const newRating = await userRatingApi.addNewRating(newRating);
    console.log(newRating);
    return res.json(newRating);
  } catch (e) {
    console.log(e);
  }
});

userRatingRouter.put("/:ratingId", async (req, res) => {
  const ratingId = getRatingId(req, res);
  const ratingData = req.body;
  try {
    await userRatingApi.updateRating(ratingId, ratingData);
    const message = `userRating with ratingId: ${ratingId} updated successfully`;
    console.log(message);
    return res.json(message);
  } catch (e) {
    console.log(e);
  }
});

userRatingRouter.delete("/:ratingId", async (req, res) => {
  const ratingId = getRatingId(req, res);
  try {
    await userRatingApi.deleteRating(ratingId);
    const message = `userRating with ratingId: ${ratingId} deleted successfully`;
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
  userRatingRouter
};

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
const genreApi = require("../models/genre.js");

/* Step 3
 *
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const genreRouter = express.Router();

/* Step 4
 *
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */

function getGenreId(req, res) {
  const genreId = req.params.genreId;
  return genreId;
}

genreRouter.get("/", async (req, res) => {
  try {
    const genres = await genreApi.getAllGenres();
    console.log(genres);
    return res.json(genres);
  } catch (e) {
    console.log(e);
  }
});

genreRouter.get("/:genreId", async (req, res) => {
  const genreId = getGenreId(req, res);
  try {
    const genre = await genreApi.getGenreById(genreId);
    console.log(genre);
    return res.json(genre);
  } catch (e) {
    console.log(e);
  }
});

genreRouter.post("/", async (req, res) => {
  const genreData = req.body;
  try {
    const newGenre = await genreApi.addNewGenre(genreData);
    console.log(newGenre);
    return res.json(newGenre);
  } catch (e) {
    console.log(e);
  }
});

genreRouter.put("/:genreId", async (req, res) => {
  const genreId = getGenreId(req, res);
  const genreData = req.body;
  try {
    await genreApi.updateGenre(genreId, genreData);
    const message = `genre with genreId: ${genreId} updated successfully`;
    console.log(message);
    return res.json(message);
  } catch (e) {
    console.log(e);
  }
});

genreRouter.delete("/:genreId", async (req, res) => {
  const genreId = getGenreId(req, res);
  try {
    await genreApi.deleteGenre(genreId);
    const message = `genre with genreId: ${genreId} deleted successfully`;
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
  genreRouter
};

const Movies = require("../models/movie");

const getallmovies = async (req, res) => {
  const { title, director, actors, genres } = req.query;
  const queryObject = {};

  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }
  if (genres) {
    queryObject.genres = { $regex: genres, $options: "i" };
  }
  if (director) {
    queryObject.director = { $regex: director, $options: "i" };
  }
  if (actors) {
    queryObject.actors = { $regex: actors, $options: "i" };
  }
  const Movies = await Movies.find(queryObject).select("title runtime");
  res.status(200).json({ Movies });
};
const getallmoviestest = async (req, res) => {
  const Movies = await Movies.find({});
  res.status(200).json({ Movies });
};
const getalltests = async (req, res) => {
  const Movies = await Movies.find(req.query).sort("runtime");
  res.status(200).json({ Movies });
};

module.exports = { getallmovies, getallmoviestest, getalltests };

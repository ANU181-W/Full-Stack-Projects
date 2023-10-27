import Movies from "../models/Movies.js";
import jwt from "jsonwebtoken";
export const Add_Movie = async (req, res) => {
  const extractedToken = req.headers.authorization.split(" ")[1];
  if (!extractedToken && extractedToken.trim() === "") {
    return res.status(404).json({ message: "Token Not Found" });
  }
  let adminId;

  jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
    if (err) {
      return res.status(400).json({ message: `${err.message}` });
    } else {
      adminId = decrypted.id;
      return;
    }
  });

  const { title, description, releaseDate, posterUrl, featured, actors } =
    req.body;
  // if (
  //   !title &&
  //   //title.trim() === "" &&
  //   !description &&
  //   //description.trim() == "" &&
  //   !posterUrl
  //   // posterUrl.trim() === ""
  // ) {
  //   return res.status(422).json({ message: "Invalid Inputs" });
  // }

  let movie;
  try {
    movie = new Movies({
      description,
      releaseDate: new Date(`${releaseDate}`),
      featured,
      actors,
      admin: adminId,
      posterUrl,
      title,
    });
    movie = await movie.save();
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    res.status(500).json({ message: "Request Failed" });
  }
  console.log("Movie Created");
  res.status(201).json({ movie });
};

export const getallmovies = async (req, res) => {
  let movies;
  try {
    movies = await Movies.find();
  } catch (err) {
    console.log(err);
  }
  if (!movies) {
    res.status(500).json({ message: "Movies Not Found" });
  }
  res.status(201).json({ movies });
};

export const get_movie_by_id = async (req, res) => {
  let id = req.params.id;

  let movies;
  try {
    movies = await Movies.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!movies) {
    res.status(500).json({ message: "Movie id Not Found" });
  }
  res.status(201).json({ movies });
};

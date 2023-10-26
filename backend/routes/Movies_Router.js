import express from "express";
import {
  Add_Movie,
  get_movie_by_id,
  getallmovies,
} from "../controller/MovieCreate.js";

const movieRouter = express.Router();
movieRouter.post("/", Add_Movie);
movieRouter.get("/getmovies", getallmovies);
movieRouter.get("/:id", get_movie_by_id);
export default movieRouter;

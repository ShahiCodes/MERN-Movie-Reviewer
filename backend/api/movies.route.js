import express from "express";
import MoviesController from "./movies.controller.js";
import ReviewsController from "./reviews.controller.js";

const router = express.Router();

router.route("/").get(MoviesController.apiGetMovies);
// router.route("/").get((req,res) => res.send("hello world"));

/**Return movie by id */
router.route("/id/:id").get(MoviesController.apiGetMovieById);
/**Return a list of genres, want user to be able to select from list tof dropdown menu based on genre type */
router.route("/genres").get(MoviesController.apiGetMovieGenres);

router
  .route("/review")
  .post(ReviewsController.apiPostReview)
  .put(ReviewsController.apiUpdateReview)
  .delete(ReviewsController.apiDeleteReview)

export default router;
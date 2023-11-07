const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");

const router = require("express").Router();

// GET "/movies/new-movies" => Renderizar formulario para crear movies y pasar la info de celebrities disponibles
router.get("/new-movies", async (req, res, next) => {
  try {
    const allCelebrities = await Celebrity.find().select({ name: 1 });

    res.render("movies/new-movies", { allCelebrities: allCelebrities });
  } catch (error) {
    next(error);
  }
});

// POST "/movies/new-movies" => crear movies y redireccionar a lista de pelliculas

router.post("/new-movies", async (req, res, next) => {
  try {
    const { title, genre, plot, cast } = req.body;
    await Movie.create({ title, genre, plot, cast });
    res.redirect("/movies/movies");
  } catch (error) {
    next(error);
  }
});

// GET "/movies/movies" => renderizar lista de peliculas

router.get("/movies", async (req, res, next) => {
  try {
    const allMovies = await Movie.find().select({ title: 1 });
    res.render("movies/movies.hbs", { allMovies: allMovies });
  } catch (error) {
    next(error);
  }
});

// GET "/movies/:id" => renderizar detalles de la pelicula

router.get("/:id", async (req, res, next) => {
  try {
    const oneMovie = await Movie.findById(req.params.id).populate("cast");
    res.render("movies/movie-details", oneMovie);
  } catch (error) {
    next(error);
  }
});

// POST "/movies/:id/delete" borrar una peli
router.post("/:id/delete", async (req, res, next) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.redirect("/movies/movies");
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;

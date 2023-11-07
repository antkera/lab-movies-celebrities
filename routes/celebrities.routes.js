const Celebrity = require("../models/Celebrity.model");

const router = require("express").Router();

// GET "celebrities/create" => renderiza un formulario para crear celebridades
router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrities");
});

// POST "celebrities/create" => envía un formulario para crear una celebridad en la DB
router.post("/create", async (req, res, next) => {
  try {
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.create({ name, occupation, catchPhrase });
  } catch (error) {
    next(error);
  }
  res.redirect("/celebrities/celebrities");
});

// GET "celebrities/celebrities" => renderiza una lista de las celebridades
router.get("/celebrities", async (req, res, next) => {
  try {
    const oneCelebrity = await Celebrity.find().select({ name: 1 });
    res.render("celebrities/celebrities", { oneCelebrity: oneCelebrity });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

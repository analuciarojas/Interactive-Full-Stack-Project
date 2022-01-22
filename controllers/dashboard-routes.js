const router = require("express").Router();
const { Quiz } = require("../models/");
const withAuth = require("../utils/auth");

// GET Dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    const quizData = await Quiz.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const quizzez = quizData.map((quiz) => quiz.get({ plain: true }));

    res.render("all-quizzez-admin", {
      layout: "dashboard",
      quizzez,
    });
  } catch (err) {
    res.redirect("login");
  }
});

//Get new quiz
router.get("/new", withAuth, (req, res) => {
  res.render("new-quiz", {
    layout: "dashboard",
  });
});

//Get by id
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const quizData = await Quiz.findByPk(req.params.id);

    if (quizData) {
      const quiz = quizData.get({ plain: true });

      res.render("edit-quiz", {
        layout: "dashboard",
        quiz,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;

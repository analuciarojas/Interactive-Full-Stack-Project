const router = require("express").Router();
const { Quiz, User } = require("../models/");

// GET all quizzez on the homepage
router.get("/", async (req, res) => {
  try {
    const quizData = await Quiz.findAll({
      include: [User],
    });

    const quizzez = quizData.map((post) => quiz.get({ plain: true }));

    res.render("all-quizzez", { quizzez });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single quiz
router.get("/quiz/:id", async (req, res) => {
  try {
    const quizData = await Quiz.findByPk(req.params.id, {
      include: [User],
    });

    if (quizData) {
      const quiz = quizData.get({ plain: true });

      res.render("single-quiz", { quiz });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/new", (req, res) => {
  res.render("new-quiz");
});

// router.get("/quizList", (req, res) => {
//   res.render("view");
// });

// router.get('/', async (req, res) => {
//   try {
//     const dbQuizData = await Post.findAll({
//       include: [User],
//     });
//     const posts = dbQuizData.map((dbQuizData) => post.get({ plain: true }));
//     res.render('all-quizzes', { posts });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const quizRoutes = require("./quiz-routes");
const commentRoutes = require("./comment-routes");

router.use("/user", userRoutes);
router.use("/quiz", quizRoutes);
router.use("/comment", commentRoutes);

module.exports = router;

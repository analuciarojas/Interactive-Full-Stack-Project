const router = require("express").Router();
const { Quiz } = require("../../models/");
const withAuth = require("../../utils/auth");

//CREATE a new quiz
router.post("/", withAuth, async (req, res) => {
  const body = req.body;
  try {
    const newQuiz = await Quiz.create({ ...body, userId: req.session.userId });
    res.json(newQuiz);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Quiz by id
router.put("/:id", async (req, res) => {
  try {
    const [affectedRows] = await Quiz.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete a quiz
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = Quiz.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

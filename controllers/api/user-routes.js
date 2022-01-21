const router = require("express").Router();
const { User, Quiz, Category } = require("../../models");
const { passwordConfirm } = require("../../utils/auth");

router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
      attribute: ["email"],
    },
    include: [
      {
        model: Category,
        attribute: ["id", "title"],
      },
      {
        model: Quiz,
        attribute: ["id", "title"],
      },
    ],
  });
});

router.post("/signup", (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
    });
});

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No User with that email address" });
      return;
    }
    const validPassword = passwordConfirm(
      req.body.password,
      dbUserData.password
    );
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;
    });
    res.json({
      user: dbUserData,
      message: `Welcome ${User} You are now logged in...`,
    });
  });
});

//Logout of session
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

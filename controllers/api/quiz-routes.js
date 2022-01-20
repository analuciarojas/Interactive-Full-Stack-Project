const router = require('express').Router();
const { Quiz } = require('../../models');

router.get('/', (req, res) => {
    Quiz.findAll()
    .then(dbQuizData => res.json(dbQuizData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
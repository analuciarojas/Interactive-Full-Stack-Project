const router = require('express').Router();

const userRoutes = require('./user-routes');
const quizRoutes = require('./quiz-routes');
const categoryRoutes = require('./category-routes');

router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);
router.use('/category', categoryRoutes);

module.exports = router;
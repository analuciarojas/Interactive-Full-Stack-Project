const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Category, Quiz } = require('../models');

router.get('/', (req, res) => {
    res.render('main', {
        id: 1,
        post_url: '.',
        title: 'Quick Quack Quiz',
        created_at: new Date(),
        vote_count: 10,
        comments: [{}, {}],
        user: {
            username: 'test_user'
    }
  });
});
    
    

module.exports = router;
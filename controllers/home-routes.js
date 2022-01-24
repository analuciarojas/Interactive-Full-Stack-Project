const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {
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

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.get('/quiz', (req, res) => {
  res.render('new-quiz')
})

router.get('/quizList', (req, res) => {
  res.render('view')
})



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
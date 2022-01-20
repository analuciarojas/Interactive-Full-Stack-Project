const router = require('express').Router();
const { User, Quiz, Category } = require('../../models');

router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: { 
            id: req.params.id,
            attribute: ['first_name', 'last_name']
        },
        include: [
            {
                model: Category,
                attribute: ['id', 'title']
            },
            {
                model: Quiz,
                attribute: ['id', 'title']
            }
        ]
    })
})

router.post('/', (req, res) => {
    User.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(500).json(err);
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if (!dbUserData) {
            res.satatus(400).json({ message: 'No User with that email address' });
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password' });
            return;
        }
        res.json({ user: dbUserData, message: `Welcome ${ User } You are now logged in...` });
    });
});

module.exports = router;
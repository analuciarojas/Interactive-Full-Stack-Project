const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const path = require('path');
const session = require('express-session')
const sessionOptions = {
    secret: 'quickquackquiz',
    cookie: {
        maxAge: 300000
    },
    saveUninitialized: true
};

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sessionOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening...'));
});
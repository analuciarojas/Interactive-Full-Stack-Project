const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const path = require('path');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
app.get('/', (req, res) =>{
    res.render("main",{})
})

sequelize.sync({ force: false }).then(() => {
=======
sequelize.sync({ force: true }).then(() => {
>>>>>>> a3c7d8e93e1e536c49c3366159ca727d2d8a065a
    app.listen(PORT, () => console.log('Now listening...'));
});
<<<<<<< HEAD
const express = require("express");
const routes = require("./controllers/");
const sequelize = require("./config/connection");
const path = require("./public/stylesheets/styles.css");
=======
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const path = require('path');
>>>>>>> a3c7d8e93e1e536c49c3366159ca727d2d8a065a

const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
// connect the db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}!`));
});
=======
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening...'));
});
>>>>>>> a3c7d8e93e1e536c49c3366159ca727d2d8a065a

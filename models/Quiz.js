const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Quiz extends Model {}

Quiz.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  {
    sequelize,
  }
);
module.exports = Quiz;

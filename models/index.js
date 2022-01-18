const User = require("./User");
const Category = require("./Category");
const Quiz = require("./Quiz");

Category.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Category.hasMany(Quiz, {
  foreignKey: "categoryId",
  onDelete: "CASCADE",
});

Quiz.belongsTo(Category, {
  foreignKey: "categoryId",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Category,
  Quiz,
};

module.exports = { User, Category, Quiz };

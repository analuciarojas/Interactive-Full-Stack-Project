const User = require("./User");
const Categories = require("./Categories)");
const Quiz = require("quiz");

// create associations
User.hasMany(Quiz, {
  foreignKey: "user_id",
});

Quiz.belongsTo(User, {
  foreignKey: "user_id",
});

Quiz.belongsToMany(User, {
  foreignKey: "quiz_id",
});

Category.belongsTo(Quiz, {
  foreignKey: "quiz_id",
});

Quiz.belongsTo(uiz, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };

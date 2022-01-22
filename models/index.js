const User = require("./User");
const Quiz = require("./Quiz");
const Comment = require("./Comment");

Quiz.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Quiz.hasMany(Comment, {
  foreignKey: "quizId",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = {
  User,
  Comment,
  Quiz,
};

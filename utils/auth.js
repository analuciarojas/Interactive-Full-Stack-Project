const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

const bcrypt = require('bcrypt')
const passwordConfirm = (plaintextpassword, hashpassword) => {
  return bcrypt.compareSync(plaintextpassword, hashpassword)
}


module.exports = {passwordConfirm, withAuth};


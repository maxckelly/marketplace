// Imported Files 
const User = require('./../models/usersData');

async function authenticate ({username, password}) {

  let foundUser = await User.findOne({username: username});

  if (foundUser.password === password) {
    return foundUser;
  };
};

const checkUser = (req, res, next) => {
  let user = authenticate(req.body);
  
  if(user) {
    req.password = user.password;
    next();
  } else if (!user) {
    return res.send("Password Incorrect");
  };
};

module.exports = { authenticate, checkUser };
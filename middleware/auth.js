// Imported Files 
const {users} = require('../models/usersData.js');

const authenticate = ({username, password}) => {
  
  let foundUser = users.find((user) => {
    return user.password === password;
  });

  if (foundUser.password === password) {
    return foundUser;
  } else if (password !== foundUser.password || password === undefined) {
    console.log("error");
  };
};

const checkUser = (req, res, next) => {
  let user = authenticate(req.body);
  
  if(user) {
    req.role = user.role;
    next();
  } else if (!user) {
    return res.send("Password Incorrect");
  }
};

module.exports = { authenticate, checkUser };
// Imported Files 
const {users} = require('../models/usersData.js');


const authenticate = ({username, password}) => {
  console.log(users);
  const foundUser = users.users.find((user) => {
    return user.password === password;
  });

  if (foundUser.password === password) {
    return foundUser;
  };
};

const checkUser = (req, res, next) => {
  const user = authenticate(req.body);

  if(user) {
    req.role = user.role;
    next();
  } else {
    return res.send("Password Incorrect");
  }
};

module.exports = { authenticate, checkUser };
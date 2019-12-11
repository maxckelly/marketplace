const fs = require('fs');
const dataFileName = './users.json';
const crypto = require('crypto');

let users = readDataFromFile();
console.log(users)

// Below function creates a new user
function newUser(req, res) {
  
  let { username, password, role } = req.body;

  // The below encrypts the password and hashes it in a base64
  password = crypto.createHash('sha256').update(password).digest('base64');
  
  let newId = users.reduce((highestId, num) => {
    return (num.id > highestId) ? num.id : highestId
  }, 0);

  newId++;
  
  const newUser = {
    id: newId,
    username: username,
    password: password,
    role: role
  };

  users.push(newUser);
  updateFile();
  res.send(newUser);
};

// Below function reads the data from the users.json file
function readDataFromFile() {
  let users = [];

  if (fs.existsSync(dataFileName)) {
    let data = fs.readFileSync(dataFileName, 'utf8');
    users = JSON.parse(data);
  };

  return users;
};

// below function writes the file users.json
function updateFile() {
  let json = JSON.stringify(users);

  fs.writeFile(dataFileName, json, 'utf8', (err) => {
    if (err) {
      throw err;
    };
  });
};


module.exports = {users, newUser, updateFile};
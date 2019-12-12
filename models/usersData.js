const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },

    username: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      required: true
    }
  },
  {
    collection: "users"
  }
);

module.exports = mongoose.model('users', userSchema);
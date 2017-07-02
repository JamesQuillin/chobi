const mongoose = require('../config.js');
const bcrypt = require('bcrypt-nodejs');
const Promise = require('bluebird');

const Schema = mongoose.Schema;

const photoSchema = new Schema({
  description: String,
  url: String,
});

const albumSchema = new Schema({
  access: [],
  photos: [photoSchema],
  name: String,
});

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  username: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  profilePic: String,
  albums: [albumSchema],
  friends: [],
});



userSchema.pre('save', function (next) {
  const cipher = Promise.promisify(bcrypt.hash);
  if (!this.profilePic) {
    this.profilePic = 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-tech-guy.png';
  }

  return cipher(this.password, null, null).bind(this)
    .then(function (hash) {
      this.password = hash;
      next();
    });
});



const User = mongoose.model('User', userSchema);

User.comparePassword = function (candidatePassword, savedPassword, cb) {
  bcrypt.compare(candidatePassword, savedPassword, (err, isMatch) => { // eslint-disable-line
    if (err) { return cb(err); }
    cb(null, isMatch);
  });
};



// if (process.env.NODE_ENV !== 'production') {
//   const testUser = {
//     firstName: 'John',
//     lastName: 'Doe',
//     username: 'john_doe',
//     password: 'john123',
//     email: 'john@doe.com',
//     // albums: [{ photos: [], name: 'All Photos' }]
//     albums: [],
//   };

//   User.remove({}, function(err, user){
//     console.log('table dropped');
//   });

//   User.create(testUser);
// }

module.exports = User;

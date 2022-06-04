/** Adding the constants first */
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
let movieSchema = mongoose.Schema({
    Title: {type: String, required: true},
    Description: {type: String, required: true},
    Genre: {
      Name: String,
      Description: String
    },
    Director: {
      Name: String,
      Bio: String
    },
    Actors: [String],
    ImagePath: String,
    Featured: Boolean
  });
  
  /** Adding mongoose for business logic */
  let userSchema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    Birthday: Date,
    FavoriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
  });
  /** Before saving the data, I want to use bcrypt to ask the password in the userSchema */
  userSchema.statics.hashPassword = (password) =>{
    return bcrypt.hashSync(password, 10)
  };

  userSchema.methods.validatePassword = (password, hashedPassword) =>{
    return bcrypt.compareSync(password, hashedPassword)
  };
  let Movie = mongoose.model('Movie', movieSchema);
  let User = mongoose.model('User', userSchema);
  
  //** @exports */
  module.exports.Movie = Movie;
  module.exports.User = User;
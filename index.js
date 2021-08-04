const mongoose = require('mongoose');
const Models = require('./models.js');
const bodyParser = require('body-parser');

const Movie = Models.Movie;
const Users = Models.User;
mongoose.connect('mongodb://localhost:27017/moviedb', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const express = require('express');
      morgan = require('morgan');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Using the Morgan middleware library to log all requests
app.use(morgan('common'));
app.use(express.json()); 

let auth = require('./auth')(app);
require('./passport');    
//GET request for returning the JSON movie data

  app.get('/movies', (req, res) => {
    Movie.find().then(movie=>{

      res.status(200).send(movie)
      
    }).catch(err=>res.status(404).send(err.message))
  });

//GET request for returning the personal message
  app.get('/', (req, res) => {
    res.send('Welcome to the Top 10 Movies List!');
  });

//Using express.static to serve the documentation.html file
app.use(express.static('public'));

//Creating an error-handling middleware function that will log all application-level errors to the terminal
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oops!Something Went Wrong!');
  });

//For returning data about a single movie
  app.get('/movies/title/:title', (req, res) => {
   Movie.find({Title : req.params.title}).then(movie=>{

      res.status(200).send(movie)
      
    }).catch(err=>res.status(404).send(err.message))
  });

//For returning data about all the movies belonging to a genre
//app.get('/movies/moviegenre/:Name', (req, res) => {
    //Movie.find({"Genre.Name" : req.params.Name}).then(movie=>{
    //res.status(200).send(movie)
    
  //}).catch(err=>res.status(404).send(err.message));
//});


//For returning data about the genre by Name
app.get('/movies/genre/:Name', (req, res) => {
  Movie.findOne({"Genre.Name" : req.params.Name}).then(movie=>{
  res.status(200).send(movie.Genre);
}).catch(err=>res.status(404).send(err.message));
});

//For returning data about a director by name
app.get('/movies/director/:Name', (req, res) => {
    Movie.findOne({"Director.Name" : req.params.Name}).then(movie=>{
      res.status(200).send(movie.Director);
    }).catch(err=>res.status(404).send(err.message));
});

//For allowing new users to register
app.post('/users/register', (req, res) => {
  Users.findOne({ Username: req.body.Username})
     .then((user) => {
       if (user) {
           return res.status(400).send(req.body.Username + 'already exists');
       } else {
           Users
             .create({
               Username: req.body.Username,
               Password: req.body.Password,
               Email: req.body.Email,
               Birthday: req.body.Birthday
             })
             .then((user) => {res.status(201).json(user) })
             .catch((error) => {
               console.error(error);
               res.status(500).send('Error: ' + error);
             })

            }
       })
       .catch((error) => {
         console.error(error);
         res.status(500).send('Error": ' + error);
       });
     });

//For getting all the users
app.get('/user', (req, res) => {
  Users.find()
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error:' + error);
    });
});

//For getting 1 user by Username
app.get('/user/:Username', (req, res) => {
  Users.findOne({ Username: req.params.Username })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error:' + error);
    });
});

//For allowing users to update their user info by searching by Username
app.put('/users/:Username', (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, { $set: 
    {
      Username: req.body.Username,
      Password: req.body.Password,
      Email: req.body.Email,
      Birthday: req.body.Birthday
    }
  },
  { new: true },//makes sure the updated document is returned
  (err, updatedUser) => {
    if(err) {
      console.error(err);
      res.status(500).send('Error: ' + error);
    }else {
      res.json(updatedUser);
    }
  });
});

//For allowing users to add a movie to their list of favorite movies
app.post('/users/:Username/movies/:MovieID', (req, res) => {
  Users.findOneAndUpdate({ Username: req.params.Username }, {
    $push: { FavoriteMovies: req.params.MovieID }
  },
  { new: true },
  (err, updatedUser) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error:' + error);
    } else {
      res.json(updatedUser);
    }
  });
});

//For allowing users to remove a movie from their list of favorites movies
  app.delete('/users/:Username/movies/:MovieID', (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.Username }, {
      $pull: { FavoriteMovies: req.params.MovieID }
    },
    { new: true },
    (err, updatedUser) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error:' + error);
      } else {
        res.json(updatedUser);
      }
    });
  });

//For allowing existing users to deregister
app.delete('/users/:Username', (req, res) => {
  Users.findOneAndRemove({ Username: req.params.Username })
  .then((user) => {
    if (!user) {
      res.status(400).send(req.params.Username + ' was not found');
      } else {
        res.status(200).send(req.params.Username + ' was deleted.');
      }
  })
  .catch((err) => {
    console.error(err);
    res.status(500).send('Error: ' + error);
  });
});

//Listening requests
app.listen(8080, () =>{
    console.log('Your app is listening on port 8080.');
  });
const express = require('express');
      morgan = require('morgan');

const app = express();

//Using the Morgan middleware library to log all requests
app.use(morgan('common'));

//JSON Data containing list of top 10 movies

let topMovies = [
    {
      title: 'Inception',
      director: 'Christopher Nolan'
    },
    {
      title: 'Lord of the Rings',
      director: 'Peter Jackson'
    },
    {
      title: 'The Matrix',
      director: 'Lana Wachowski'
    },
    {
        title: 'The Avengers',
        director: 'Anthony Russo'
      },
      {
        title: 'The Silence Of The Lambs',
        director: 'Jonathan Demme'
      },
      {
        title: 'Terminator',
        director: 'James Cameron'
      },
      {
        title: 'The Prestige',
        director: 'Christopher Nolan'
      },
      {
        title: 'Shutter Island',
        director: 'Martin Scorsese'
      },
      {
        title: 'The Fugitive',
        director: 'Andrew Davis'
      },
      {
        title: 'The Shack',
        director: 'Stuart Hazeldine'
      }
  ];

//GET request for returning the JSON movie data

  app.get('/movies', (req, res) => {
    res.json(topMovies);
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

//Listening requests
app.listen(8080, () =>{
    console.log('Your app is listening on port 8080.');
  });


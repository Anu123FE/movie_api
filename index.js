const express = require('express');
      morgan = require('morgan');

const app = express();

//Using the Morgan middleware library to log all requests
app.use(morgan('common'));

//JSON Data containing list of top 10 movies

let topMovies = [
    {
      title: 'Inception',
      director: 'Christopher Nolan',
      genre: 'Sci-Fi'
    },
    {
      title: 'Lord of the Rings',
      director: 'Peter Jackson',
      genre: 'fiction'
    },
    {
      title: 'The Matrix',
      director: 'Lana Wachowski',
      genre: 'Sci-fi'
    },
    {
        title: 'The Avengers',
        director: 'Anthony Russo',
        genre: 'Super-Heroes'
      },
      {
        title: 'The Silence Of The Lambs',
        director: 'Jonathan Demme',
        genre: 'Suspense-Thriller'
      },
      {
        title: 'Terminator',
        director: 'James Cameron',
        genre: 'Action'
      },
      {
        title: 'The Prestige',
        director: 'Christopher Nolan',
        genre: 'Suspense-Thriller'
      },
      {
        title: 'Shutter Island',
        director: 'Martin Scorsese',
        genre:'Suspense-Thriller'
      },
      {
        title: 'The Fugitive',
        director: 'Andrew Davis',
        genre: 'Suspense-Thriller'
      },
      {
        title: 'The Shack',
        director: 'Stuart Hazeldine',
        genre: 'Feel-Good'
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

//For returning data about a single movie
  app.get('/topMovies/title', (req, res) => {
    res.send('Successful GET request returning data on a single movie by title');
  });

//For returning data about a genre
app.get('/topMovies/genre', (req, res) => {
    res.send('Successful GET request returning data on movies by genres');
});

//For returning data about a director by name
app.get('/topMovies/director', (req, res) => {
  res.send('Successful GET request returning data on a director');
});

//For allowing new users to register
app.post('/topMovies/register', (req, res) => {
  res.send('Registeration Successful!');
});

//For allowing users to update their user info
app.put('/topMovies/update', (req, res) => {
  res.send('Successfully updated your information!')
});

//For allowing users to add a movie to their list of favorite movies-text
app.post('/topMovies/add', (req, res) => {
  res.send('Successfully added your new favourite movie to your list of favorites!')
});

//For allowing users to remove a movie from their list of favorites movies-text
app.delete('/topMovies/delete', (req, res) => {
  res.send('Successfully deleted from your list of favourites!')
});

//For allowing existing users to deregister-text
app.delete('/topMovies/deregister', (req, res) => {
  res.send('User details successsfully removed!')
});

//Listening requests
app.listen(8080, () =>{
    console.log('Your app is listening on port 8080.');
  });
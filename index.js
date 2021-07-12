const express = require('express');
      morgan = require('morgan');

const app = express();

//Using the Morgan middleware library to log all requests
app.use(morgan('common'));
app.use(express.json()); 
//JSON Data containing list of top 10 movies
let users = [
  {
    id:1,
    fullname: 'John Doe',
    email: 'johndoe@mail.com',
    favMovies: [{
      title: 'Inception',
      director: 'Christopher Nolan',
      genre: 'Sci-Fi'
    }]
  },
  {
    id:2,
    fullname: 'Jane Doe',
    email: 'janedoe@mail.com',
    favMovies: [{
      title: 'Inception',
      director: 'Christopher Nolan',
      genre: 'Sci-Fi'
    }]
  }

];
let movies = [
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
    res.json(movies);
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
    const movie = movies.find((m)=> m.title == req.params.title);
    res.send(movie);
  });

//For returning data about a genre
app.get('/movies/genre/:genre', (req, res) => {
  const movies_ = movies.filter((m)=> m.genre == req.params.genre);
  res.send(movies_);
});

//For returning data about a director by name
app.get('/movies/director/:director', (req, res) => {
  const director = movies.filter((m)=> m.director == req.params.director);
  res.send(director);
});

//For allowing new users to register
app.post('/users/register', (req, res) => {
  users.push(req.body);
  res.send('Registeration Successful!');
});
app.get('/users', (req, res) => {
  res.send(users);
});

//For allowing users to update their user info
app.put('/users/update/:id', (req, res) => {
  let userId =  users.findIndex((u)=>u.id==req.params.id);
  users.slice(userId,1, {...req.body});
  res.send('Changes saved successfully!');
  res.send(users);
});

//For allowing users to add a movie to their list of favorite movies
app.post('/favourite/add/:id', (req, res) => {
  const user = users.find((u) => u.id ==req.params.id);
  user.favMovies.push(req.body);
  res.send(user);
});

//For allowing users to remove a movie from their list of favorites movies-text
app.delete('/favourite/delete/:id/:title', (req, res) => {
  const user = users.find((u) => u.id ==req.params.id);
  const favs = user.favMovies.filter((m)=>m.title != req.params.title)
  user.favMovies = [...favs];
  res.send(user);
});

//For allowing existing users to deregister-text
app.delete('/users/deregister/:id', (req, res) => {
  users.filter((m) => m.id !=req.params.id);
  res.send('User details successsfully removed!')
});

//Listening requests
app.listen(8080, () =>{
    console.log('Your app is listening on port 8080.');
  });
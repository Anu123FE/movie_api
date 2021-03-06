# Project name: movie_api

# Description: 
- A movie app that shows the best 10 movies along with all the details and enables users to create and modify their own favorite movie lists.

# Technology Used:
 - Used Backend Tech (NodeJs, MongoDB, Express) with FrontEnd Tech (React). This projct was done to target learning the MERN stack. This is one of the      best options that can be used to combine Front End and Back End Tech and hence I opted for this.
 - MongoDB (for collections of movies)
 - Express
 - React
 - Node.js
 - Postman (Testing Of Endpoints)
 - Heroku (app deployment)

# Features:
- Users are able to access a database to see a selection of movies. 
- The user can register (for new users) and returning users can login with their credentials.
- The users are also able to get details about a specific movie like the synopsis, the movie's director's details and the movie's genre details.
- The user can also add a movie or remove a movie from his/her favorite movie list
- The users can also edit their personal informtaion and delete their profiles if needed.

# Usage: 
- After navigating to the website, the user needs to sign up with his/her details. The user can see then see the list of movies with all their details (movie description, genre, director) once you login. The user can also create your favorite movie list which they can later modify (add/delete movies to/from your list). Users can also deregister by deleting their profiles on the app.

# The Challenges Faced and The Learning Experience:
Starting from scratch and not having a technical background were the major challenges but it was an amazing learning experience.
- The API e is supposed to have multiple features as mentioned above. Each feature has to have its own end point and routing. Organizing the files is something that helped me keep the code logical and I understood the value of writing simple code and helped return back to a particular section that needed rework easily.
- It was difficult initially to understand how the HTTP Request Method (Post,Get,Put, Delete) translated to CRUD (Create,Read,Update,Delete). But understanding this helped me throughout my complete web development course.
- Running the tests through Postman helped to tackle errors early on in the dev environment itself. It is a wonderful tool that can eb used to test out the endpoints easily
- It was particularly difficult loading the database (collections) in MongoDB, but once that was done, it was easy to keep the database structured, organised and uniform
- I faced a lot of issues due to bugs while trying to publish the app on Heroku, especially due to a clash between the version I was using. I learnt that it is extremely important to use the latest version of Heroku so that it works without a glitch.
- Also, the version of the nodejs being used affects heroku.
- I had missed setting CORS in Express to allow for all origins which initially caused me to run into some issues, but I resolved this once I realised the basis of the error.

# Screenshots Included: 

- Screenshot1-Documentation: ![image](https://user-images.githubusercontent.com/80176993/129422937-c73d8e50-b6b8-4525-b155-c170aace1512.png)

- Screenshot2-Documentation: ![image](https://user-images.githubusercontent.com/80176993/129423386-9bb0c22d-790b-4e5d-922a-50b4aef0aeb8.png)

- Register (New User): <img width="1211" alt="Register new user" src="https://user-images.githubusercontent.com/80176993/171306264-b653572e-97d1-499a-ba3b-c63e3776cbc4.png">

- Register (if duplicate): <img width="855" alt="Register Endoint (duplicate user)" src="https://user-images.githubusercontent.com/80176993/171303905-6fb6767a-7cfb-4e70-a75e-ce3f95dd1606.png">

- Login: <img width="1233" alt="Login Endpoint" src="https://user-images.githubusercontent.com/80176993/171304063-27fad69d-0f13-4e5e-8dbc-a22c2b776e76.png">

- Delete User Profile: <img width="1228" alt="Delete User" src="https://user-images.githubusercontent.com/80176993/171304426-270a6ed1-690f-4a94-83ce-3faa92966961.png">

- Get All Movies:
<img width="1229" alt="Get all movies" src="https://user-images.githubusercontent.com/80176993/171305694-287d0b29-3083-447d-a1dc-bb629e9226e3.png">

# Step By Step Set Up:
 - ??? Set up your project directory
 - ??? Set up Node.js syntax
 - ??? Create a ???package.json??? file
 - ??? Import all necessary packages into project directory
 - ??? Project dependencies set up 
 - ??? Route HTTP requests for the project using Express
 - ??? Define the endpoints for the REST API
 - ??? Create a relational (SQL) database for storing movie data using PostgreSQL
 - ??? Recreate the relational (SQL) database as a non-relational (NoSQL) database using MongoDB
 - ??? Model the business logic using Mongoose
 - ??? Implement authentication and authorization into the API using basic HTTP authentication and JWT (token-based) authentication
 - ??? Incorporate data validation logic into the API
 - ??? Implement data security and storage controls
 - ??? Host the project on the web using Heroku

# Process Flow:
- MongoDB Database
Install Mongo shell and then the collections are created - movies (with movie name, synopsis, genre, director) and users (register users with their username, email id, birthdate, password and favorite movies list as their credentials)
10 movies added as documents

- Using Mongoose (Business Logic)
Mongoose is used to connect the database from MongoDB to the server.

# Authentication - using Passport:
- Basic HTTP authentication for all 1st logins
- Bearer Token Generation

# MongoDBAtlas (Database) and HEROKU
Steps
- register with heroku
- create Heroku app
- create mongodb on MongoDBAtlas
- export MongoDB database (JSON Collections)
- push Git main to Heroku

# Languages Used: 
- HTML, CSS, JS. Have also used MongoDB, Mongo Atlas, Express, NodeJS, Mongoose

# App Published Remotely on: 
- Heroku (https://movie-api-v001.herokuapp.com/)


clone repository
### to run server

`node server.js`



<!DOCTYPE html-->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="stylesheet.css">
    <title>Documentation</title>
</head>
<body>
    <header>
      <h1>Title of API:Flicks At Clicks!</h1><br>
    </header>

     <h2>Description: A REST API for an application that interacts with a database that stores data for different movies. This app is published <a href="https://movie-api-v001.herokuapp.com/">here</a></h2><br>

    <table class="styled-table">
        <thead>
            <tr>
                <th>Request</th>
                <th>URL</th>
                <th>Method</th>
                <th>Query Parameters</th>
                <th>Request body data format</th>
                <th>Response body data format</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Return a list of all the movies to the user</td>
                <td>/movies</td>
                <td>GET</td>
                <td>None</td>
                <td>None</td>
                <td>A JSON object holding all the data about all the movies</td>
            </tr>
            <tr>
                <td>Return data about a single movie by title to the user</td>
                <td>/movies/[title]</td>
                <td>GET</td>
                <td>:Title</td>
                <td>None</td>
                <td>An array object holding all the data about a single movie. Example:<br>
                    [
                          {
                            "Genre": {
                                       "Name": "Mystery",
                                        "Description": "A mystery film is a genre of film that revolves around the solution of a problem or a crime. It focuses on the efforts of the detective, private investigator or amateur sleuth to solve the mysterious circumstances of an issue by means of clues, investigation, and clever deduction."
                                      },
                            "Director": {
                                          "Name": "Christopher Nolan",
                                           "Bio": "Christopher Nolan is a British-American film director, producer, and screenwriter. Thanks to his stylized, time-bending renovation of film noir conventions, director Christpher Nolan established himself as a creator of psychologically demanding films that defied classification.",
                                           "Birth": "July 30, 1970",
                                           "Death": ""
                                        },
                            "Actors": [],
                            "_id": "604fb2e73c12eaccf1a9f251",
                            "Title": "The Prestige",
                            "Description": "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.",
                            "ImagePath": "https://www.imdb.com/title/tt0482571/mediaviewer/rm4031813632/",
                             "Featured": false,
                             "Bio": "Update Christoper Nolan is amazing."<br>
                         }
                    ]
                </td>
            </tr>
            <tr>
                <td>Return data about the genre by Name</td>
                <td>movies/genre/[Name]</td>
                <td>GET</td>
                <td>:Name</td>
                <td>None</td>
                <td>A JSON format response containing the description of the specific genre. Example: <br>
                    {
                        "Name": "Thriller",
                        "Description": "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that evokes excitement and suspense in the audience.[1] The suspense element found in most films' plots is particularly exploited by the filmmaker in this genre. Tension is created by delaying what the audience sees as inevitable, and is built through situations that are menacing or where escape seems impossible."
                    }
               </td>
            </tr>
            
            <tr>
                <td>Return data about a director by name</td>
                <td>/movies/director/[Name]</td>
                <td>GET</td>
                <td>:Name</td>
                <td>None</td>
                <td>A JSON format data holding all the data about a director by name. Example:<br>
                    {
                        "Name": "Christopher Nolan",
                        "Bio": "Christopher Edward Nolan CBE is a British-American film director, producer, and screenwriter. His directorial efforts have grossed more than US$5 billion worldwide, garnered 36 Oscar nominations and ten wins. Born and raised in London, Nolan developed an interest in filmmaking from a young age.",
                        "Birth": "July 30, 1970",
                        "Death": ""
                    }
                    </td>
            </tr>

            <tr>
                <td>Allow users to add a movie to their list of favorites</td>
                <td>/users/:Username/movies/:MovieID</td>
                <td>POST</td>
                <td>:MovieID</td>
                <td>None</td>
                <td>A JSON format data containing the user's details with the favorite movies including the newly added one like so: <br>
                    {
                        "FavoriteMovies": [
                            "604fb3063c12eaccf1a9f253",
                            "604fb2f53c12eaccf1a9f252",
                            "604fb32c3c12eaccf1a9f256"
                        ],
                        "_id": "604fc86c3c12eaccf1a9f25b",
                        "Username": "jondoe4",
                        "Password": "passcode1",
                        "Email": "jondoe4@yahoo.ca",
                        "Birthday": "1976-10-23T00:00:00.000Z"
                    }
                </td>
            </tr>

            <tr>
                <td>Allow new users to register</td>
                <td>/users/register</td>
                <td>POST</td>
                <td>:register</td>
                <td>Data containing new user details</td>
                <td>A JSON format response like below: <br> 
                    {
                        ID: Integer,
                        Username: String,
                        Password: String,
                        Email: String,
                        Birthday: Date
                    }
                </td>
            </tr>
            
            <tr>
                <td>Allow registered users to login</td>
                <td>/login</td>
                <td>POST</td>
                <td>:login</td>
                <td>Data containing Username and Password</td>
                <td>If authentication is verified, the user is taken to movies page, if authentication fails, a message shows up 
                    "No Such User"
                </td>
            </tr>

            <tr>
                <td>Get All The Users</td>
                <td>/user</td>
                <td>GET</td>
                <td>None</td>
                <td>None</td>
                <td>A JSON format list containing all the users with their details</td>
            </tr>

            <tr>
                <td>Get 1 User By Username</td>
                <td>/user/[Username]</td>
                <td>GET</td>
                <td>:Username</td>
                <td>None</td>
                <td>A JSON format list containing all the details of 1 user whose username is searched like so:<br>
                    {
                        "FavoriteMovies": [],
                        "_id": "6106ee7627143352d02e3100",
                        "Username": "Nair",
                        "Password": "123ABC",
                        "Email": "nair@yahoo.com",
                        "__v": 0
                    }
                
                </td>
            </tr>

            <tr>
                <td>Allow users to update their user info</td>
                <td>/users/update/[Username]</td>
                <td>PUT</td>
                <td>:Username</td>
                <td>JSON data containing changes to old profile</td>
                <td>A JSON format response with the user's profile details including the newly updated data like so: <br>
                    {
                        "FavoriteMovies": [
                            "604fb3063c12eaccf1a9f253",
                            "604fb2f53c12eaccf1a9f252"
                        ],
                        "_id": "604fc86c3c12eaccf1a9f25b",
                        "Username": "jondoe4",
                        "Password": "passcode-1-update",
                        "Email": "jondoe4a@yahoo.com",
                        "Birthday": "1990-01-01T00:00:00.000Z"
                    }
                </td>
            </tr>

            <tr>
                <td>Allow users to remove a movie from their list of favorites</td>
                <td>/users/:Username/movies/[MovieID]</td>
                <td>DELETE</td>
                <td>MovieID</td>
                <td>None</td>
                <td>A JSON format data containing the user's details with the favorite movies excluding the newly removed one like so: <br>

                    {
                        "FavoriteMovies": [
                            "604fb3063c12eaccf1a9f253",
                            "604fb2f53c12eaccf1a9f252"
                        ],
                        "_id": "604fc86c3c12eaccf1a9f25b",
                        "Username": "jondoe4",
                        "Password": "passcode1",
                        "Email": "jondoe4@yahoo.ca",
                        "Birthday": "1976-10-23T00:00:00.000Z"
                    }
                </td>
            </tr>

            <tr>
                <td>Allow existing users to deregister</td>
                <td>/users/[Username]</td>
                <td>DELETE</td>
                <td>:Username</td>
                <td>None</td>
                <td>A text response saying that the 'Username was deleted.'</td>
            </tr>  
        </tbody>
    </table>
</body>
</html>


# Movie and TV Show Wishlist API

The Wishlist API is an API that allows the user to store information about movies and TV shows, their streaming platforms, genres, and also enables the user to view their interests and organize already watched movies and TV shows.

<h2>Installation</h2>
To use this API, you need to have Node.js installed on your machine. Clone this repository, navigate to the root directory, and run the following command:

```npm install```

This command will install all the necessary dependencies to run this API.

<h2>Usage</h2>
To run the API, execute the following command in the root directory:

```npm start```


<h3>The following are the endpoints available in this API:</h3>

<strong>GET: /itens</strong> - This route returns all movies and series added by the user.

POST: /itens - This route allows the user to add movies and series, including their genre, streaming platform and status (want to watch, watching, watched). It requires a JSON body with the following format:

```
{
  "name": "Meet the Robinsons",
  "genre": 3, //Animation
  "platform": 5, //Disney+
  "status": 3 //want to watch
}
```

PUT: /itens/:id - This route receives the ID of the movie or series and updates its status. It requires a JSON body with the following format:

```
{
  "status": 2 // "watching"
}
```

DELETE: /itens/:id - This route deletes the movie or series by its ID.

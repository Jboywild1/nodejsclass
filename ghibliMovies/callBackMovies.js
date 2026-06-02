const request = require('request');

request('https://ghibliapi.vercel.app/films'), (error, response, body) => {

  if (error) {
    console.error(`could not send request to AP: ${error.message}`);
  }

  if (response.statusCode != 200) {
    console.error(`status recieved ${response.statusCode}`);
  }

  //this portion of the code runs while waiting forthe request
  //function to finish
  console.log('Processing out list of movies')

  let movies = JSON.parse(body);
  movies.forEach(movie => {
    // console.log(`${movies['title']}, ${movies['release_date']}`);
    console.log(`${movie.title}, ${movie.release_date}`);
  });

};
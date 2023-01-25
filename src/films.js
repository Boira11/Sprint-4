// Exercise 1: Get the array of all directors.

function getAllDirectors(movies) {

  let getAllDirectors = movies.map(nomDirector => nomDirector.director);
  console.table(getAllDirectors);
  return getAllDirectors;

  }


//  Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {

  let moviesDirector = movies.filter(searchMovie => searchMovie.director == director);

  console.log(moviesDirector);
  return moviesDirector;
  
    
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let moviesDirector = movies.filter(searchMovie => searchMovie.director == director);
  let total = moviesDirector.reduce((sum, movie) => sum + movie.score, 0);
  let average = (total / moviesDirector.length).toFixed(2);
  return parseFloat(average);
  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {



    //Hacemos un recorrido con map y ordenamos las películas por títulos 
    let titulosPeliculas = movies.map(pelicula => pelicula.title).sort();

    //Seleccionamos las 20 primeras peliculas
    let moviesOrder = titulosPeliculas.slice(0, 20);

    console.table(moviesOrder);

    return moviesOrder;

  
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {

let newMovies = [...movies];
//Comparamos los elementos a y b;
newMovies = newMovies.sort((a, b) => {
  
  return a.year - b.year || a.title.localeCompare(b.title);
});
return newMovies;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genere) {

  //Comprobamos que el genero exista
  if (!movies.some(movie => movie.genre.includes(genere))) {
    return "El género especificado no existe en la lista de películas";
  }

  //Filtramos las peliculas por la categoria deseada
  let categoria = movies.filter(categoriaPeli => categoriaPeli.genre.includes(genere)); 
  categoria = categoria.filter(categoriaPeli2 => categoriaPeli2.score !==''); 

  //Sumamos todas las puntuaciones de las peliculas filtradas anteriormente.
  let scoreFilms = categoria.reduce((a, b) => a + (b.score ? b.score : 0), 0);

  //Hacemos la media de las puntuaciones obtenidas con el numero de peliculas
  let mediaScore = scoreFilms / categoria.length;
  
  //Lo redondeamos con 2 decimales
  mediaScore = mediaScore.toFixed(2);   
 
   return parseFloat(mediaScore);

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {


  
}

// Exercise 8: Get the best film of a year  
function bestFilmOfYear() {




  
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,  
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}



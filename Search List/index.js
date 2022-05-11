var options = {
  valueNames: [ 'name', 'year','type','poster' ],
  item: '<li><img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" class="poster"/><h3 class="name"></h3><p class="year"></p><p class="type"></p></li>'
  };

  var values = [
  {
      name: "The Avengers",
      year: "2012-",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
      name: "Avengers: Endgame",
      year: "2019-",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  },

  {
      name: "Avengers: Infinity War",
      year: "2018-",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
 },

 {
      name: "Avengers: Age of Ultron",
      year: "2015-",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
 },
      {
      name: "The Avengers",
      year: "1998-",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
      },
      {
      name: "The Avengers:Earth's Mightiest Heroes",
      year: "2010-",
      type: "series",
      poster: "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
      },
      {
      name: "Ultimate Avengers: The Movie",
      year: "2006-",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"
      },
      {
      name: "Ultimate Avengers II",
      year: "2006-",
      type: "movie",
      poster: "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      },
      {
      name: "The Avengers",
      year: "1961–1969",
      type: "series",
      poster: "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
      },

];

var filmList = new List('film-list', options, values);


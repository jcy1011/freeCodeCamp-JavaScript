
// version 1.0
let filteredList = watchList.slice().filter(movie => parseInt(movie.imdbRating) >= 8);
filteredList = filteredList.map(item => ({
  title: item["Title"],
  title: item["imdbRating"]
}));

// another way
let filteredList = watchList.slice().filter(movie => parseInt(movie.imdbRating) >= 8);
filteredList = filteredList.map(item => ({
  title: item["Title"],
  rating: item.imdbRating
}));

// cleaned up
let filteredList = watchList
  .slice()
  .filter(movie => parseInt(movie.imdbRating) >= 8)
  .map(item => ({
  title: item["Title"],
  rating: item.imdbRating
}));
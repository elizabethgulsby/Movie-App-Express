var config = {
   baseUrl: 'http://api.themoviedb.org/3/',
   imageBase: 'http://image.tmdb.org/t/p/w300',
   imageBaseFull: 'http://image.tmdb.org/t/p/original',
   nowPlayingEP: 'movie/now_playing?',
   api_key: '&api_key=5847d8d10c644a674d1dbbc20b14230e',
   bpMovies11: 'discover/movie?with_people=287&primary_release_year=2011&sort_by=vote_average.desc',
   genreBase: 'https://api.themoviedb.org/3/genre/',
   searchModifier: '&language=en-US&include_adult=false&sort_by=created_at.asc'
};

module.exports = config;
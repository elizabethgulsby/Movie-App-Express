var config = {
   baseUrl: 'http://api.themoviedb.org/3/',
   movieIdSearch: 'https://api.themoviedb.org/3/movie/',
   imageBase: 'http://image.tmdb.org/t/p/w300',
   imageBaseFull: 'http://image.tmdb.org/t/p/original',
   nowPlayingEP: 'movie/now_playing?',
   api_key: '&api_key=5847d8d10c644a674d1dbbc20b14230e',
   bpMovies11: 'discover/movie?with_people=287&primary_release_year=2011&sort_by=vote_average.desc',
   genreBase: 'https://api.themoviedb.org/3/genre/',
   searchModifier: '&language=en-US&include_adult=false&sort_by=created_at.asc',
   movieTitleSearchBase: 'https://api.themoviedb.org/3/search/movie?',
   personSearchBase: 'https://api.themoviedb.org/3/search/person?api_key=5847d8d10c644a674d1dbbc20b14230e&language=en-US&page=1&include_adult=false&query=',
   tvBaseUrl: 'https://api.themoviedb.org/3/search/tv?',
   trailerBaseUrl: 'https://api.themoviedb.org/3/movie/',
   trailerEndUrl: '/videos?api_key=5847d8d10c644a674d1dbbc20b14230e&language=en-US',
   YouTubeBase: 'https://www.youtube.com/watch?v=',
};

module.exports = config;
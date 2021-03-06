var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');
var currentFilter = 'Now Playing';


/* GET home page - nowPlaying data shows on load */
router.get('/', function(req, res, next) {
  request.get(config.baseUrl + config.nowPlayingEP + config.api_key, (error, response, movieData) => {
  	movieData = JSON.parse(movieData);
  	// res.json(movieData);
  	res.render('index', {
  		movieData: movieData,
  		imageUrl: config.imageBase,
  		isMovie: 1
  	})

  })
  // res.send("Hi there!")
});

//Set up routes for genres
router.get('/genre/:id', function(req, res, next) {
	var genreUrl = config.genreBase + req.params.id + '/movies?api_key=5847d8d10c644a674d1dbbc20b14230e' + config.searchModifier;
	request.get(genreUrl, (error, response, movieData) => {
		movieData = JSON.parse(movieData);
		movieData = posterNotFound(movieData, true);
		res.render('index', {
			movieData: movieData,
			imageUrl: config.imageBase,
			isMovie: 1
		})
	})
})

//Search for Now Playing route
router.post('/NowPlaying', function(req, res, next) {
	var searchTerms = encodeURI(req.body.search);
	var movieTitleSearchUrl = config.movieTitleSearchBase + 'api_key=5847d8d10c644a674d1dbbc20b14230e' + '&language=en-US&page=1&include_adult=false&query=' + searchTerms;
	// res.send("Hi there!");
	request.get(movieTitleSearchUrl, (error, response, movieData) => {
		movieData = JSON.parse(movieData);
		console.log(movieData);
	})
})

//get searches based on Title filter option
router.post('/Title', function(req, res, next) {
	var titleSearch = encodeURI(req.body.search);
	var titleSearchUrl = config.movieTitleSearchBase + 'api_key=5847d8d10c644a674d1dbbc20b14230e' + '&language=en-US&page=1&include_adult=false&query=' + titleSearch;
	request.get(titleSearchUrl, (error, response, movieData) => {
		movieData = JSON.parse(movieData);
		console.log("HI");
		movieData = posterNotFound(movieData, true);
		res.render('index', {
			movieData: movieData, 
			imageUrl: config.imageBase,
			isMovie: 1
		})
	})

})

//get searches based on Actor filter option
router.post('/Actor', function(req, res, next) {
	var actorSearch = encodeURI(req.body.search);
	var actorSearchUrl = config.personSearchBase + actorSearch;
	request.get(actorSearchUrl, (error, response, movieData) => {
		movieData = JSON.parse(movieData);
		movieData = posterNotFound(movieData, false);
		res.render('index', {
			movieData: movieData,
			imageUrl: config.imageBase,
			isMovie: 0
		})
	})

})


//get searches based on TV Show filter option
router.post('/TV%20Show', function(req, res, next) {
	var tvShowSearch = encodeURI(req.body.search);
	var tvShowSearchUrl = config.tvBaseUrl + 'api_key=5847d8d10c644a674d1dbbc20b14230e&language=en-US&page=1&query=' + tvShowSearch;
	request.get(tvShowSearchUrl, (error, results, movieData) => {
		movieData = JSON.parse(movieData);
		movieData = posterNotFound(movieData, true);
		res.render('index', {
			movieData: movieData,
			imageUrl: config.imageBase,
			isMovie: 1
		})
	})

})

//get details page of any film clicked
router.get('/results/:id', function(req, res, next) {
	var infoQuery = config.movieIdSearch + req.params.id + '?api_key=5847d8d10c644a674d1dbbc20b14230e&language=en-US';
	console.log(infoQuery);

	movieData = request.get(infoQuery, (error, results, movieData) => {
		movieData = JSON.parse(movieData);

		var trailerQuery = config.trailerBaseUrl + req.params.id + config.trailerEndUrl;

		request.get(trailerQuery, (error2, results2, movieData2) => {
				movieData2 = JSON.parse(movieData2);

				res.render('results', {
					movieData: movieData,
					movieData2: movieData2,
					imageUrl: config.imageBase,
					YouTubeBase: config.YouTubeBase
				})
			})

	})

})

module.exports = router;

//global functions
function posterNotFound(movieData, isMovie) {
	for (let i = 0; i < movieData.results.length; i++) {
		console.log("poster path: " + movieData.results[i].poster_path); 
		if (movieData.results[i].poster_path == null && isMovie === true) {
			movieData.results[i].poster_path = '/images/Keep-Calm-Poster-Not-Found.png';
		}
		if (movieData.results[i].profile_path == null && isMovie === false) {
			movieData.results[i].profile_path = '/images/photo-not-found.png';
		}
	}
	return movieData;
}






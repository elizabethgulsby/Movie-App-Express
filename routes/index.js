var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config/config');


/* GET home page - nowPlaying data shows on load */
router.get('/', function(req, res, next) {
  request.get(config.baseUrl + config.nowPlayingEP + config.api_key, (error, response, movieData) => {
  	movieData = JSON.parse(movieData);
  	// res.json(movieData);
  	res.render('index', {
  		movieData: movieData,
  		imageUrl: config.imageBase
  	})

  })
  // res.send("Hi there!")
});

//Set up routes for genres
router.get('/genre/:id', function(req, res, next) {
	var genreUrl = config.genreBase + req.params.id + '/movies?api_key=5847d8d10c644a674d1dbbc20b14230e' + config.searchModifier;
	request.get(genreUrl, (error, response, movieData) => {
		movieData = JSON.parse(movieData);
		movieData = posterNotFound(movieData);
		res.render('index', {
			movieData: movieData,
			imageUrl: config.imageBase
		})
	})
})

module.exports = router;

//global functions
function posterNotFound(movieData) {
	for (let i = 0; i < movieData.results.length; i++) {
		if (movieData.results[i].poster_path == null) {
			movieData.results[i].poster_path = '/images/Keep-Calm-Poster-Not-Found.png';
		}
	}
	return movieData;
}

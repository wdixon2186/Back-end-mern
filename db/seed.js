const Movie = require("../models/Movie");
const MovieData = require("./movie-data.json");

Movie.deleteMany({})
	.then(() => {
		return Movie.insertMany(MovieData);
	})
	.then(() => {
        console.log('we got data');
		process.exit();
	});

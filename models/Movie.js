let mongoose = require('../db/connection');

let MovieSchema = new mongoose.Schema({
    title: String,
    rtScore: Number,
    writer: String,
    director: String,
    image: String,
    homePage: String
})

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

router.get('/', (req, res) => {
    Movie.find({}).then(movies => {
        res.json(movies)
    })
})

router.get('/:title', (req, res) => {
    Movie.findOne({title: req.params.title}).then(movie => {
        res.json(movie);
    })
})


module.exports = router;
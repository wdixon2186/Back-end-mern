const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies2019');


module.exports = mongoose;
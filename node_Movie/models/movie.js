const mongoose = require('mongoose');
const MovieSchema = require('../schemas/movie');
const movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
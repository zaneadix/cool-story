
var uniqueRandomArray = require('unique-random-array');
var pokemonNames = require('./pokemon-names.json');

module.exports = {
    all: pokemonNames,
    random: uniqueRandomArray(pokemonNames)
};
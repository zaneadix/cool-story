
var uniqueRandomArray = require('unique-random-array');
var pokemonNames = require('./pokemon-names.json');

var getRandomPokemonName = uniqueRandomArray(pokemonNames);

function random (count) {

    if (count) {

        var list = [];
        for (var i = 1; i < count; i++) {
            list.push(getRandomPokemonName());
        }
        return list;
    }

    return getRandomPokemonName();
}

module.exports = {
    all: pokemonNames,
    random: random
};
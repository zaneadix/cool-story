var expect = require('chai').expect;
var pokemon = require('./index');

describe('pokemon names', function () {

    describe('all', function () {
        it('should return a list of strings', function () {
            expect(pokemon.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings (array) {
                return array.every(function (item) {
                    return typeof item === 'string';
                });
            }
        });

        it('should contain drifloon', function () {
            expect(pokemon.all).to.include('Drifloon');
        });
    });

    describe('random', function () {
        it('should contain random name from pokemon.all', function () {
            expect(pokemon.all).to.include(pokemon.random());
        });

        it('should return an array of random names if passed a number', function () {
            var randomList = pokemon.random(3);
            expect(randomList).to.have.length(3);
            randomList.forEach(function (item) {
                expect(pokemon.all).to.include(item);
            });
        });
    })
});
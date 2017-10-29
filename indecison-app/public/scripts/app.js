'use strict';

// arguments object no longer bound with arrow functions
var add = function add(a, b) {
    //   console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

// this keyword no longer bound with arrow functions
var user = {
    name: 'Motley',
    cities: ['Bristol', 'Wells', 'St Davids'],
    printPlacesVisited: function printPlacesVisited() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has visited ' + city + '!';
        });
    }
};
console.log(user.printPlacesVisited());

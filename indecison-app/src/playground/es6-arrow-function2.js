// arguments object no longer bound with arrow functions
const add  = (a, b) => {
 //   console.log(arguments);
    return a + b;
};
console.log(add(55, 1));

// this keyword no longer bound with arrow functions
const user = {
    name: 'Motley',
    cities: ['Bristol', 'Wells', 'St Davids'],
    printPlacesVisited() {
        return this.cities.map((city) => {
            return this.name + ' has visited ' + city + '!';
        });
    }
};
console.log(user.printPlacesVisited());

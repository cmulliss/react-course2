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
        return this.cities.map((city) => this.name + ' has visited ' + city + '!')
    }
}
console.log(user.printPlacesVisited());

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => (number * this.multiplyBy)  )
    }
}
console.log(multiplier.multiply());
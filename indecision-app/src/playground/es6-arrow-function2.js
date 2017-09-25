const add = (a, b) => {
    return a + b;
}
console.log(add(2, 3));

const user = {
    name: 'Cherry',
    cities: ['Wells', 'Bristol', 'London' ],
    printPlacesVisited() {
        return this.cityMessages = this.cities.map((city) => this.name + ' has visited ' + city);
    }
};
console.log(user.printPlacesVisited());
    
//challenge
// return array of numbers
// multiply by + single number

const multiplier = {
    factor: 2,
    numbers: [1, 2, 3, 4],
    multiply() {
       return this.answers = this.numbers.map((nums) => this.factor * nums);
        
    }
}
console.log(multiplier.multiply());

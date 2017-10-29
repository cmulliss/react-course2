const square = function (x) {
    return x * x;
};

const squareArrow = (y) => {
    return y * y;
}
//concise version for single expression
const squareArrow2 = (z) => (z * z);

console.log(square(8));
console.log(squareArrow(4));
console.log(squareArrow2(3));

const getFirstName = (fullName) => {
    return (fullName.split(' ')[0]);
};
console.log(getFirstName('Motley Penguin'));

const getSecondName = (fullName) => (fullName.split(' ')[1]);
console.log(getSecondName('Motley Penguin'));




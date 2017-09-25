
const arrowSquare = (x) => {
    return x * x;
}
const arrowSquareConcise = (x) => x * x ;

console.log(arrowSquare(4));
console.log(arrowSquareConcise(9));

const getSirname = (fullname) => fullname.split(' ')[1];
console.log(getSirname('Motley Penguin'))
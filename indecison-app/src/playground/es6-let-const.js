var nameVar = 'Cherry';
nameVar = 'Motley';

console.log('nameVar:', nameVar);

let nameLet = 'Penguin';
nameLet = 'Me';
console.log('nameLet', nameLet);

const nameConst = 'Chris';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Cat';
    return petName;
}

var fullName = 'Motley Penguin';
    if (fullName) {
        const firstName = fullName.split(' ')[0];
        console.log(firstName)
    }

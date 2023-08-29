const person = {
    name: 'Mega',
    age: 29,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};

const printName = (personData) => {
    console.log(personData.name);
}
printName(person);
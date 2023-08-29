const hobbies = ['Sports', 'Cooking'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }

console.log(hobbies.map(hobby => {
    return 'Hobby : ' + hobby
}));
console.log(hobbies);


// Q. Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. 
//    Transform it into ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon] using array maps

const fruit = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];
const FruitsArray = fruit.map(item => {
    if (item.trim() === '') {
        return 'empty string';
    }
    else {
        return item;
    }
});
console.log(FruitsArray);

// 8. Array, Object & Reference Type 

const person = {
    name: 'Mega',
    age: 29,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};

const P_hobbies = ['Sports', 'Danceing', 'Cooking'];
/*for (let P_hobby of P_hobbies){
    console.log(P_hobby);
}
console.log((P_hobbies.map(P_hobby => 'Hobby' + P_hobby)));
console.log(P_hobbies);*/
P_hobbies.push('Programming');
console.log(P_hobbies);


// 9. Understanding Spread & Rest Operators

// Copy an Array
// const copiedArray = P_hobbies.slice();
// or
const copiedArray = [...P_hobbies]
console.log('Copied Array : ', copiedArray);


const copiedPerson = { ...person };
console.log(copiedPerson);

/*
    const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3]
    console.log(toArray(1, 2, 3));
}*/
// For Passing the any number of arguments
const toArray = (...args) => {
    return args
}
console.log(toArray(1, 2, 3));
console.log(toArray(1, 2, 3, 4));
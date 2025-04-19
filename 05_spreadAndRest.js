//SPREAD
const hobbies = ['Sports', 'Cooking'];
const newHobbies = [...hobbies, 'Programming'];
console.log(newHobbies); // ['Sports', 'Cooking', 'Programming']

const person = { name: 'Thomas', age: 30 };
const copiedPerson = { ...person, location: 'Canada' };
console.log(copiedPerson); // { name: 'Thomas', age: 30, location: 'Canada' }

//REST

const toArray = (...args) => args;
console.log(toArray(1, 2, 3, 8, 10));
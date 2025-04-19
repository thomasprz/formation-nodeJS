//OBJECTS
const person = {
    name: 'Max',
    age: 39,
    greet(){
        console.log('Hi, I am ' + this.name)
    }
}

const printName = (personData) => {
    console.log(personData.name)
}
printName(person) //Max


const printNameAlt = ({name, age}) => {
    console.log(name,age)
}
printNameAlt(person) //Max

const { name, age } = person;
console.log(name, age)


//ARRAYS

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies
console.log(hobby1,hobby2) //Sports Cooking , no array individual values


//FONCTION CLASSIQUE
function summarizeUser(userName, userAge, userHasHobby) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
  }
  console.log(summarizeUser(lastName, age, hasHobbies)); // Appel de la fonction classique
  
//FONCTION FLÉCHÉE (Arrow Function)
  const summarizeUser1 = (userName, userAge, userHasHobby) => {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
  };
  console.log(summarizeUser1(lastName, age, hasHobbies)); // Appel de la version fléchée
  
//FONCTION ADDITION (avec return explicite)
  const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(1, 2)); // Résultat : 3
  
//FONCTION ADDITION (avec return implicite)
  const total = (a, b) => a + b;
  console.log(total(1, 2)); // Résultat : 3
  
//FONCTION AVEC UN SEUL ARGUMENT
  const addOne = a => a + 1;
  console.log(addOne(10)); // Résultat : 11
  
//FONCTION SANS ARGUMENT
  const addRandom = () => 1 + 2;
  console.log(addRandom()); // Résultat : 3
  
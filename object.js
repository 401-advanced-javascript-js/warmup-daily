const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

const state = {people, stuff};

// --------------------------------

let newPeople = ['Odie', ...people, 'Garfield'];

const newStuff = { ...stuff, cars: [...stuff.cars, 'Honda']};

let newState = {...state, people: ['Odie', ...people, 'Garfield'], stuff:{...stuff, cars: [...stuff.cars, 'Honda']}};

console.log(newPeople);
console.log(newStuff);
console.log(newState);
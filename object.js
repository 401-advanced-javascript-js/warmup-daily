// people, stuff and state constant variables so they remain unchanged

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

// creates copy and not reference of the peoples/stuff objects
const state = { people: [...people], stuff: {...stuff} };

// --------------------------------

let newPeople = ['Odie', ...people, 'Garfield'];

const newStuff = { ...stuff, cars: [...stuff.cars, 'Honda']};

let newState = {...state, people: ['Odie', ...people, 'Garfield'], stuff:{...stuff, cars: [...stuff.cars, 'Honda']}};

console.log(newPeople); // [ 'Odie', 'Kookla', 'Fran', 'Ollie', 'Garfield' ]

console.log(newStuff);
/* 
  { tv: 'huge',
    radio: 'old',
    toothbrush: 'frayed',
    cars: [ 'Toyota', 'Mazda', 'Honda' ] }
 */

console.log(newState);
/*
  { people: [ 'Odie', 'Kookla', 'Fran', 'Ollie', 'Garfield' ],
    stuff:
    { tv: 'huge',
      radio: 'old',
      toothbrush: 'frayed',
      cars: [ 'Toyota', 'Mazda', 'Honda' ] 
    } 
  }
*/
// object trong js

let cars = {
  color: 'white',
  weight: 2,
  model: 'BMW',
  start: function() {
    //return this.model + ' success';
    console.log(this); // chinh la object cars
    return `${this.model} success`;
  },
  stop: () => {
    //return this.model + 'OK';
    console.log(this);
    return `${this.model} OK`;
  }
}
// truy cap vao object
let name = cars.model; //cars['model'];
console.log(name);

console.log(cars.start()); // () : run function
console.log(cars.stop());

//console.log(module);

let person = {
  name: 'A',
  age: 20,
  add: 'Ha Noi',
  email: 'test@gmail.com'
}

// for ... of ==> Array
// for ... in ==> Object
for(let i in person) {
  console.log(i); // key
  console.log(person[i]); // value
}

// not a primitive value.
const info = {id: 1, name: 'A'};
info.age = 30; // bo sung them thuoc tinh
console.log(info);

function getInfo() {
  return info;
}

// object destructing : lay dc gia tri thong qua key luon
const { age } = getInfo();
console.log(age);

//Spread Operator
const A = { id: 1, age: 2, money: 20};
const B = { add: 'HN', email: 'test@gmail.com'};
const C = {...A, ...B}
console.log(A, B, C);

let emObj = [1,2,3,5];
const D = [{id: 1, name: 'a'}, ...emObj];
console.log(D);

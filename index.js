/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.stomach = [];
  this.name = name;
  this.age = age;
}

Person.prototype.eat = function (food) {
//  for (stomach = 0; this.stomach.length < 10; stomach++) {
  if (this.stomach.length < 10) {
   this.stomach.push(food);
 }
}
Person.prototype.poop = function() {
  this.stomach = [];
}
Person.prototype.toString = function() {
  return this.name + this.age;
}

//  for (stomach = 0; this.stomach.length > 10; stomach--) {
//    this.stomach.pop()
//  }

//  if (this.stomach.length <= 10) {
//   this.stomach.push(food);
//  } else {
//    this.stomach.pop();
//  }


/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons) {
  this.tank = this.tank + gallons;
}

Car.prototype.drive = function(distance) {
  this.odometer = distance;
  this.tank = this.milesPerGallon - distance;
  const maxDrivableDistance = (this.tank * this.milesPerGallon);
  if (maxDrivableDistance <= distance) {
    return `I ran out of fuel at ${this.odometer} miles!`
  }
  // if (this.tank > 0) {
  //   this.tank = this.tank - (this.milesPerGallon/distance);
  // } else {
  //   return `I ran out of fuel at ${this.odometer} miles!`
  // }
  // if (this.tank === 0) {
  //   this.tank = 0;
  // }

}


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function () {
  return "Playing with " + this.favoriteToy;
}
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1.  if "this" is contained in the global scope, it will point toward the window (which references the entirity of javascript for some reason).
  2.  if this is inside of the function scope, it will make reference to value that is in the function itself. 
      if the function is called preceeding a dot, then it will reference what is left of that dot. 
  3.  if "this" is used in a constructor function, used with conjunction "new", it will reference the specific object 
      inside that specific instance of the constructor function.
  4.  if you use a function with call or apply, then "this" is defined explicitly after. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}

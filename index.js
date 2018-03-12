var animal = 'dog';
const two = 2;

function myAnimal() {
  var innerVariable = 'dog';
  
  return function innerScope() {
    var inaccessible = animal;

  return animal;
  
}

function yourAnimal() {
  return animal;
}

function add2(n) {
  return n + two;
  
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction

// Hoisting
// var x;



// x = 30
console.log(x);
console.log(fn);
console.log(fnTest);
var x = 30;

// Hoisting
// 1. Breaks the initialization and assignment as two separate commands
// 2. Hoists all the initializations (var statements) to the top of the program
//  no matter where they are actually placed

function fn() {

}

var fnTest = function () {};

// var fn = () => {}

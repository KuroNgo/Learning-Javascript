var x = 5;
var turnToZero = function (number) {
  var y = 0;
  number = 0;
  console.log("Value of variable x is: " + x);
  console.log("Value of variable y is: " + y);
};
//if you want to change value x, the code below do not it
turnToZero(x);
console.log("Outside function, value of variable x is: " + x);
console.log("Outside function, value of variable y is: " + y);
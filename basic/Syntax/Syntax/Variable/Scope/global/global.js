var x = 10;
var turnToZero = function (number) {
  var y = 5;
  number = 0;
  console.log("Value of  variable x is: " + x);
  console.log("Value of variable y is: " + y);
};
turnToZero(x);
console.log("Outside function, value of variable x is: " + x);
console.log("Outside function, value of variable y is: " + y);


var x = 10;
var turnToZero = function () {
  y = 5;
  x = 0;
  console.log("The value of variable x is: " + x);
  console.log("The value of variable y is " + y);
};
console.log("Before you called function, the value of variable x is " + x);
turnToZero();
console.log("After you called function, the value of variable x is " + x);


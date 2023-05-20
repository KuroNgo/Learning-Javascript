function ex_let() {
  // the scope of the let is a block, identify by curly braces
  for (let i = 0; i < 3; i++) {
    console.log(i + "  into the for loop");
  }
  console.log(i + " outside the for loop"); // i is not defined
}
ex_let();

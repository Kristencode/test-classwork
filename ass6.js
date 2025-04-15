// return prime numbers in an array
// let prime = [];
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



//   addin]Z this in function where an number can be inputed and checked if its prime or not
let prime = []
function checkNumber(num) {
    if (num % 2 === 0) {
      console.log(`${num} is even`)
    } else {
      console.log(` ${num} is prime `);
    }
  }


checkNumber(3);
// find the factorial of 5


let factValue =1;

function findFact(num) {
  for (i = 1; i <= num; i++) {
    factValue = factValue * i;
  }

}
findFact(5)
console.log(factValue);

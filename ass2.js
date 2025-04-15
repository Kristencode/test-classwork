// check for the maximum number in this array
let array = [1, 2, 100, 3, -1];
let min = array[0];
let max= array[0];

for (i = 0; i < array.length; i++) {
  if (array[i] > array.length) {
   max = array[i];
  }
}
 console.log(max);

// minimum

for (i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}
console.log(min);
 
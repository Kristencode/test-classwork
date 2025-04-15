// find index of a number in an array

let array = [2, 3, 4, 5];

function findIndex(numbers, index){
for(let i =0; i < numbers.length; i++){
    if(numbers[i]=== index){
        return i;
    }
}
return -1
}

console.log(findIndex(array, 4))
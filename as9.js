// merge 2arrays and return it in ascending or descending order

let Arrays = [
  [0, 4, 6],
  [1, 2, 3],
];
let mergeArr = [];

for ( let i = 0; i < Arrays.length; i++) {
for( let k =0; k< Arrays[i].length; k++){;
 mergeArr.push(Arrays[i][k]);

}
}

console.log(mergeArr);
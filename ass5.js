// count a vowel in string

let vowels = ["a", "e", "i", "o", "u"];
let result = [];
// let count = 0;

function Findvowels(word) {
  let findWord = word.toLowerCase();

  for (let i = 0; i < findWord.length; i++) {
    let vowelword = findWord[i];

    for (let k = 0; k < vowels.length; k++) {
      if (vowelword === vowels[k]) {
      //  count++
      result.push(vowelword);
      break
      }
    }
  }
  console.log(result)
}

Findvowels("Emmanuel"); 
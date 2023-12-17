/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/


function countVowels(str) {
  let theString = str.toLowerCase().split('')

  let count = (0);

  for (let i=0; i<theString.length; i++) {
    if (theString[i] === 'a' || theString[i] === 'e' || theString[i] === 'i' || theString[i] === 'o' || theString[i] === 'u'){
      count += 1
    }
  }

  return(count);
}

countVowels('wqjc8w39eiofcjcj')


module.exports = countVowels;
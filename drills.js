'use strict';

//URLify a string
// Input: tauhida parveen
// Output: tauhida%20parveen
// input: www.thinkful.com /tauh ida parv een
// output: www.thinkful.com%20/tauh%20ida%20parv%20een

//O(n)
function urlify(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    str[i] === ' ' ? (result += '%20') : (result += str[i]);
  }

  return result;
}

console.log(urlify('tauhida parveen'));
console.log(urlify('www.thinkful.com /tauh ida parv een'));

//Filtering an array
// O(n)
function filterArr(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8]));

//Max sum in the array
//Input: [4,6,-3,5,-2,1]
// Output: 12

//adding all numbers together and keep track of value
// 4+6 (10) 10+-3 (7) 7+5 (12) 12-2 (10) 10+1 (11)

//let storedVal = arr[0];
// loop through adding first num to next num = value
// storedVal < value ? storedVal becomes value : leave it
// return storedVal

function maxSum(arr) {
  let storedVal = arr[0];
  let currentVal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentVal = currentVal + arr[i];
    if (storedVal < currentVal) storedVal = currentVal;
  }

  return storedVal;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));

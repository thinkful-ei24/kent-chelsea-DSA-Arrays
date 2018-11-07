'use strict';
/* eslint-disable no-console */

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

// O(n)
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

// Input: [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output: [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// Create a new array
// Compare the first values of each array
// Insert the lower value into the new array
// Increment the index of the array that was used
// Repeat until the we finish iterating through the arrays
// Return the new array

// O(n)
function mergeArrays(arr1, arr2) {
  const result = [];
  let i = 0; // index for first arr
  let j = 0; // index for second arr
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || arr2[j] === undefined) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result;
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

// Create a new object
// Loop through the second string - 'aeiou'
// {a: true, e: true}
// Loop through the whole string
// check each letter if it's in the lookup,
// concat to new string if it isn't

// O(n)
function removeCharacters(sentence, chars) {
  const lookup = {};
  let result = '';
  for (let i=0; i<chars.length; i++) {
    lookup[chars[i]] = true;
  }

  for (let i=0; i<sentence.length; i++) {
    if (!lookup[sentence[i]]) {
      result += sentence[i];
    }
  }

  return result;
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
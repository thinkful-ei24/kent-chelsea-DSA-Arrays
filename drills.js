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

//Merge Arrays
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

//Remove Characters
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
  for (let i = 0; i < chars.length; i++) {
    lookup[chars[i]] = true;
  }

  for (let i = 0; i < sentence.length; i++) {
    if (!lookup[sentence[i]]) {
      result += sentence[i];
    }
  }

  return result;
}

console.log(
  removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')
);

//Products

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]
//multiply all input / by index

//let product = loop through * each index
// product / loop through each index and push result to new array

//O(n)
function products(arr) {
  let product = 1;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    result.push(product / arr[i]);
  }

  return result;
}

console.log(products([1, 3, 9, 4]));

//2D array

// Input:
// [[1,0,1,1,0],
//  [0,1,1,1,0],
//  [1,1,1,1,1],
//  [1,0,1,1,1],
//  [1,1,1,1,1]];

//Copy:
// [[1,0,1,1,0],
//  [0,1,1,1,0],
//  [1,1,1,1,1],
//  [1,0,1,1,1],
//  [1,1,1,1,1]];

// Output:
// [[0,0,0,0,0],
//  [0,0,0,0,0],
//  [0,0,1,1,0],
//  [0,0,0,0,0],
//  [0,0,1,1,0]];

// make a new array that matches the dimensions of the input array
//loop through input array arr[0] - while looking at arry[0] loop through values if there's a 0 make them all 0
// and arr[0][1]

//first find indexes for each row where there are zeros
//ex: [1, 0, 1, 1, 0] => [1, 4]
function findZeros(row) {
  let indice = [];
  for (let index = 0; index < row.length; index++) {
    if (row[index] === 0) {
      indice.push(index);
    }
  }
  return indice;
}

function twoDArray(arr) {
  //empty result array
  let copyArr = [];
  //keeping track of columns we need to zero out
  let zeroCols = [];

  arr.forEach(row => {
    //loop through arr
    let zeros = findZeros(row); //find zeros in each row

    if (!zeros.length) {
      //if there are no zeros
      copyArr.push(row.slice()); //copy arr row into copyArr
    } else {
      zeroCols = [...zeroCols, ...zeros]; //keep track of zero out columns
      copyArr.push(row.map(() => 0)); // create row of 0s
    }
  });

  copyArr.forEach(row => {
    // loop through copyArr
    zeroCols.forEach(col => {
      // loop through zeroCols arr
      row[col] = 0; // based on which row we're in and the index from zeroCols change to 0
    });
  });

  return copyArr;
}

console.log(
  twoDArray([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ])
);

// String Rotation
// Input: amazon, azonma
// Output: False
// Input: amazon, azonam
// Output: true

// amazon -> mazona -> azonam -> zonama -> onamaz -> namazo -> amazon
// iterate
// move one letter to the back
// compare the strings
// if it matches, return true,
// if it doesnt match, go to the next loop
// once it goes through all the combinations, return false

function stringRotation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let i = 0;
  let rotation = str1;
  // rotation = 'amazon'
  while (i < str1.length) { // mazon + a => mazona
    rotation = rotation.substring(1) + rotation[0];
    if (rotation === str2) {
      return true;
    }
    i++;
  }

  return false;
}

console.log(stringRotation('amazon', 'azonma')); // => False
console.log(stringRotation('amazon', 'azonam')); // => true
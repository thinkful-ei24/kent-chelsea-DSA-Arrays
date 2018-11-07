'use strict';
const Memory = require('./memory');
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  // O(n) push
  // push(value) {
  //   this._resize(this.length + 1);
  //   memory.set(this.ptr + this.length, value);
  //   this.length++;
  // }

  // O(1) until we need to resize then O(n) worst case
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  //O(n)
  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  // O(1)
  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  //O(1)
  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }

    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  //O(n)
  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  //O(n)
  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

function main() {
  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr);
  console.log(arr.get(0));

  arr = new Array();
  arr.push('tauhida');
  console.log(arr);
  console.log(arr.get(0));
}

main();

// What is the length, capacity and memory address of your array?
// Length: 1, Capacity: 3, Memory Address: 0

// What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code
// Length: 6, Capacity: 12, Memory Address: 3
// Length increased in size because we pushed 6 values into the array.
// Capacity increased because we went over the initial capacity of 3. The size increased to 12 because we multiplied (capacity + 1) * SIZE_RATIO
// Memory Address moved to 3 because we needed to rewrite the new array after the increase in capacity.

// What is the length, capacity and address of your array? Explain the result of your program after adding the new lines of code
// Length: 3, Capacity: 12, Memory Address: 3
// The length decreased in size because we removed elements using the pop method.
// The capacity remains the same because we did not need to change it when the length decreases
// The memory address is the same because we didn't need to change the capacity.

// Print this one item that you just added. What is the result? Can you explain your result?
// The result is NaN. This is because the memory is a Float64Array and can only hold numbers.

// What is the purpose of the _resize() function in your Array class?
// Free up the old memory space and create new memory space based on the capacity needed.

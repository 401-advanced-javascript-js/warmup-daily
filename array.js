'use strict';

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 *
 * @param {*} arr
 */
function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

/**
 *
 * @param {*} arr
 */
function whileLoop(arr) {
  let iterator = 0;
  while (iterator < arr.length) {
    console.log(arr[iterator]);
    iterator++;
  }
}

/**
 * Takes in arr and callback, returns new array with each element of passed in array modified by callback
 * @param {*} arr
 * @param {*} callback
 * @return {*} newArr
 */
function map(arr, callback) {
  const newArr = [];
  for (const i in arr) {
    newArr[i] = callback(arr[i]);
  }
  return newArr;
}

/**
 *
 * @param {*} arr
 * @param {*} callback
 * @return {*} newArr
 */
function filter(arr, callback) {
  const newArr = [];
  for (const thing of arr) {
    if (callback(thing)) newArr.push(thing);
  }
  return newArr;
}

/**
 *
 * @param {*} arr
 * @param {*} callback
 * @param {*} initialCondition
 * @return {*} accumulator
 */
function reduce(arr, callback, initialCondition) {
  const givenInitial = (initialCondition === 0 || initialCondition);
  let accumulator = (givenInitial ? initialCondition : arr[0]);
  let i = (givenInitial ? 0 : 1);

  for (i; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}


forLoop(nums);
whileLoop(nums);

// implicit return by the callback
const mapped = map(nums, (a) => a * 2);
console.log(mapped);

const filtered = filter(nums, (b) => !(b % 2));
console.log(filtered);

const reduced = reduce(nums, (acc, curr) => acc * curr, 0);
console.log(reduced);
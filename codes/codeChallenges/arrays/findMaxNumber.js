// Find the Maximum Number in an Array

// Problem: Write a function that takes an array of numbers as input and returns the maximum number in the array.

function findMaxNumber(arr) {
  let maxNum = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i]
    }
  }

  return maxNum
}

console.log(findMaxNumber([2, 9, 1, 3, 4, 10, 8]))

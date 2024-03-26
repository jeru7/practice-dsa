// Set Union

// Problem: Write a function that takes two arrays as input and returns a new array containing the union of elements from both arrays. The union of two sets contains all unique elements that are present in either set.

const arr1 = [1, 2, 3]
const arr2 = [3, 4, 5]

function setUnion(arr1, arr2) {
  let unionArr = arr1.concat(arr2)
  let setUnion = new Set(unionArr)

  return [...setUnion]
}

console.log(setUnion(arr1, arr2))

// The time complexity is O(m + n), where n and m are the total elements of the arrays.

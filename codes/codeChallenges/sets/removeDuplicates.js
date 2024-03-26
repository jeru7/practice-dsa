// Remove Duplicates from Array using Set

// Problem: Write a function that takes an array as input and returns a new array with duplicate elements removed using a Set.

const numbers = [1, 2, 3, 3, 4, 4, 5]

function removeDuplicates(arr) {
  let newSet = new Set(arr)

  // Array.from can be use
  return [...newSet]
}

console.log(removeDuplicates(numbers))

// The time complexity is O(n)

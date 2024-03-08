// Binary Search
// This algorithm works on sorted arrays and divides the search space in half with each iteration, making it much more efficient than linear search. It's commonly used for searching in sorted lists or arrays.

// Problem:
// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// NOTE: BINARY SEARCH ONLY WORKS IN A SORTED ARRAY
function binarySearch(arr, target) {
  let firstIndex = 0
  let lastIndex = arr.length - 1

  while (firstIndex <= lastIndex) {
    // gets the middle index
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2)
    // checks if the middle index is equal to target
    if (arr[middleIndex] === target) {
      return middleIndex
      // if the middle element is less than the target, it means that we should traverse the right side of the array.
    } else if (arr[middleIndex] < target) {
      // sets the middle index as the first index
      firstIndex = middleIndex + 1
      //   if the middle element is greater than the target, we should traverse the left side of the array.
    } else {
      // sets the middle index as the last index
      lastIndex = middleIndex - 1
    }
  }

  return -1
}

console.log(binarySearch([-5, 2, 4, 6, 10], 4))

// The time complexity is O(log(n))

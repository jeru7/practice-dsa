// Binary Search
// This algorithm works on sorted arrays and divides the search space in half with each iteration, making it much more efficient than linear search. It's commonly used for searching in sorted lists or arrays.

// Problem:
// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

function recursiveBinarySearch(arr, target, first = 0, last = arr.length - 1) {
  if (first > last) {
    return -1
  }

  let middleIndex = Math.floor((first + last) / 2)

  if (arr[middleIndex] === target) {
    return middleIndex
  }

  if (middleIndex > target) {
    return recursiveBinarySearch(arr, target, first, middleindex - 1)
  } else {
    return recursiveBinarySearch(arr, target, middleIndex + 1, last)
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6))

// The time complexity is O(log(n))

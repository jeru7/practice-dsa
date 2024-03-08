// Linear Search
// Also known as sequential search, this algorithm iterates through each element of the data structure to find the target item. It's straightforward but can be slow for large datasets.

// Problem:
// Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

function linearSearch(arr, target) {
  // traverse through the elements of the array using for loop
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      // if the target get matched with the elements, it will return the element's index.
      return i
    }
  }
  // after traversing to the whole array and the target doesn't get match, it will return -1.
  return -1
}

console.log(linearSearch([-5, 2, 10, 4, 6], 20))

// The time complexity is O(n)

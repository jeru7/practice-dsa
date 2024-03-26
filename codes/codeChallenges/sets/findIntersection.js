// Finding Intersection of Arrays

// Problem: Given two arrays, write a function to find the intersection (common elements) of the arrays and return a new array containing only the unique elements that are present in both arrays.

const arr1 = [1, 2, 2, 3, 4]
const arr2 = [2, 3, 3, 5]

function findIntersection(arr1, arr2) {
  let emptyArr = []
  let set1 = new Set(arr1)
  let set2 = new Set(arr2)

  for (let item of set1) {
    if (set2.has(item)) {
      emptyArr.push(item)
    }
  }

  // filter method can also be use: return [...set1].filter(item => set2.has(item));

  return emptyArr
}

console.log(findIntersection(arr1, arr2))

// The time complexity is O(n)

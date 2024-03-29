// Next Greater Element

// Problem: Given an array of integers nums, return an array result where result[i] is the next greater element for nums[i]. The next greater element of an element x is the first greater element to its right. If no greater element exists, then the output for that element should be -1. You must implement a function that returns the result array.

class Stack {
  constructor() {
    this.items = []
  }

  push(elem) {
    this.items.push(elem)
  }

  pop() {
    if (this.isEmpty()) {
      return 'Underflow'
    }
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  size() {
    return this.items.length
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.items = []
  }
}

function nextGreaterElement(arr) {
  // TODO:

  let stack = new Stack()
  let tempArray = new Array(arr.length).fill(-1)

  for (let i = arr.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() <= arr[i]) {
      stack.pop()
    }

    tempArray[i] = stack.isEmpty() ? -1 : stack.peek()

    stack.push(arr[i])
  }

  return tempArray
}

console.log(nextGreaterElement([4, 1, 2, 5, 3]))

// The time complexity is O(n)

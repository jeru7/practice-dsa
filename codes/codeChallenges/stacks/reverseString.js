// Reverse a String

// Problem: Write a function that takes a string as input and returns the string reversed using a stack.

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

function reverseString(str) {
  let stack = new Stack()
  let reversedString = ''

  for (let char of str) {
    stack.push(char)
  }

  // can use while loop

  //   while(stack.length > 0) {
  //     reverseString += stack.pop()
  //   }

  let size = stack.size()

  for (let i = 0; i < size; i++) {
    reversedString += stack.pop()
  }

  return reversedString
}

console.log(reverseString('hello world'))

// The time complexity is O(n)

// Balanced Parentheses

// Problem: Check if a given string of parentheses is balanced using a stack.

// Stack implementation
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
}

function balancedParentheses(input) {
  if (input.length % 2 !== 0) {
    return false
  }

  let stack = new Stack()

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
      stack.push(input[i])
    } else if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
      if (stack.isEmpty()) {
        return false
      }

      let topElem = stack.pop()

      if (
        (input[i] === ')' && topElem !== '(') ||
        (input[i] === ']' && topElem !== '[') ||
        (input[i] === '}' && topElem !== '{')
      ) {
        return false
      }
    }
  }
  return stack.isEmpty()
}

console.log(balancedParentheses('()'))

// The time complexity is O(n)

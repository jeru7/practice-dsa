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
      return 'Stack is empty'
    }

    return this.items.pop()
  }

  peek() {
    if (this.isEmpty()) {
      return 'Stack is empty'
    }

    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }
}

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

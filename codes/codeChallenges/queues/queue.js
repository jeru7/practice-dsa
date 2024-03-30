// Queue Implementation

class Queue {
  constructor() {
    this.items = []
  }

  enqueue(elem) {
    this.items.push(elem)
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }

    return this.items.shift()
  }

  front() {
    if (this.isEmpty()) {
      return 'Queue is empty'
    }

    return this.items[0]
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

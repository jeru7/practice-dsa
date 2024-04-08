// Implement a Queue data structures using LinkedList

// A queue is a First-In-First-Out (FIFO) data structure where elements are added at one end (rear) and removed from the other end (front). Common operations nclude enqueue (add) and dequeue (remove).

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  enqueue(value) {
    if (!value) {
      return null
    }

    let node = new Node(value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
    this.size++
  }

  dequeue() {
    if (this.isEmpty()) {
      return null
    } else if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
    }
    this.size--
  }

  print() {
    if (this.isEmpty()) {
      return console.log('Queue is empty')
    } else {
      let curr = this.head
      let items = ''
      while (curr !== null) {
        items += `${curr.value} `
        curr = curr.next
      }
      console.log(items)
    }
  }
}

let list = new LinkedListQueue()
list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.dequeue()
list.print()
console.log(list.getSize())

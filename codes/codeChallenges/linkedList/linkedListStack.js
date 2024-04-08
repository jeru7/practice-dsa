// Implement a stack using LinkedList

//  A stack is a Last-In-First-Out (LIFO) data structure where elements are added and removed from the same end, called the top of the stack. Common operations include push (add) and pop (remove).

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
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

  push(value) {
    let node = new Node(value)

    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  pop() {
    if (this.isEmpty()) {
      return 'stack is empty'
    } else {
      this.head = this.head.next
    }
    this.size--

    if (this.isEmpty()) {
      this.tail = null
    }
  }

  peek() {
    if (this.isEmpty()) {
      return 'Stack is empty'
    } else {
      return this.head.value
    }
  }

  print() {
    if (this.isEmpty()) {
      return 'stack is empty'
    } else {
      let curr = this.head
      let nodes = ''
      while (curr !== null) {
        nodes += `${curr.value} `
        curr = curr.next
      }
      return nodes
    }
  }
}

// Linked List Implementation

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  insertFirst(item) {
    let node = new Node(item)

    if (this.isEmpty()) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  insertLast(item) {
    let node = new Node(item)
    if (this.isEmpty()) {
      this.insertFirst(node)
    } else {
      let prev = this.head
      while (prev.next !== null) {
        prev = prev.next
      }
      node = prev.next
    }
    this.size++
  }

  deleteFirst() {
    if (this.isEmpty()) {
      return 'LinkedList is empty'
    } else {
      this.head = this.head.next
      this.size--
    }
  }
}

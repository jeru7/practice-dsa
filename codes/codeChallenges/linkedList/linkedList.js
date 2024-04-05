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

  // inserts an item at the head of the list.

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

  // inserts an item at the end of the list.
  insertLast(item) {
    let node = new Node(item)
    if (this.isEmpty()) {
      this.insertFirst(item)
    } else {
      let prev = this.head
      while (prev.next !== null) {
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  // inserts an item at the specified index of the list.
  insertAtIndex(item, index) {
    if (index < 0 || index > this.size) {
      return 'Invalid index'
    }

    if (index === 0) {
      return this.insertFirst(item)
    } else {
      let node = new Node(item)
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  // deletes the head of the list
  deleteFirst() {
    if (this.isEmpty()) {
      return 'LinkedList is empty'
    } else {
      this.head = this.head.next
      this.size--
    }
  }

  // deletes the last item of the list
  deleteLast() {
    if (this.isEmpty()) {
      return 'LinkedList is empty'
    }

    if (this.size === 1) {
      this.head = null
      this.size--
      return
    }

    let current = this.head
    for (let i = 0; i < this.size - 1; i++) {
      current = current.next
    }
    current.next = null
    this.size--
  }

  // deletes the node based on the specified index
  deleteFrom(index) {
    if (index < 0 || index >= this.size) {
      return 'Invalid index'
    }

    if (index === 0) {
      return this.deleteFirst()
    } else if (index === this.size - 1) {
      return this.deleteLast()
    }

    let nodeToDel = this.head
    let prev = null

    for (let i = 0; i < index; i++) {
      prev = nodeToDel
      nodeToDel = nodeToDel.next
    }
    prev.next = nodeToDel.next
    nodeToDel = null
    this.size--
  }

  // deletes the node based on the specified value
  deleteValue(value) {
    if (this.isEmpty()) {
      return 'LinkedList is empty'
    }

    if (value === this.head.value) {
      return this.deleteFirst()
    } else {
      let nodeToDel = this.head
      let prev = null
      while (nodeToDel) {
        if (nodeToDel.value === value) {
          prev.next = nodeToDel.next
          nodeToDel = null
          this.size--
          return
        }
        prev = nodeToDel
        nodeToDel = nodeToDel.next
      }
    }
    console.log("Value doesn't exist in the LinkedList") // should throw error
  }

  // reverses the linkedlist
  reverse() {
    if (this.isEmpty()) {
      return 'LinkedList is empty'
    }

    let prev = null
    let curr = this.head
    while (curr) {
      let next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    this.head = prev
  }

  // returns the index of the node based on the specified value
  search(value) {
    if (this.isEmpty()) {
      return -1
    }

    if (value === this.head.value) {
      return 0
    }

    let current = this.head
    let index = 0
    while (current.next !== null) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  // prints the linkedlist
  print() {
    if (this.isEmpty()) {
      console.log('LinkedList is empty')
      return
    }

    let items = ''
    let current = this.head
    for (let i = 0; i < this.size; i++) {
      items += `${current.value} `
      current = current.next
    }
    console.log(items)
  }
}

let list = new LinkedList()
list.insertFirst(10)
list.insertFirst(20)
list.insertFirst(30)
list.print()
list.reverse()
list.print()

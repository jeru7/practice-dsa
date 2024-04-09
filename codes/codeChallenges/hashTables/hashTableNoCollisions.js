// Implementation of Hash Table that solve the problem of having a hash collisions

// A hash collision occurs in a hash table when two different keys hash to the same index or slot in the underlying array of the hash table. In other words, when the hash function generates the same hash value for two distinct keys, a collision happens.

class Node {
  constructor(key, value) {
    this.prev = null
    this.next = null
    this.value = value
    this.key = key
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

  // insert first
  append(key, value) {
    let node = new Node(key, value)
    if (this.isEmpty()) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.size++
  }

  prepend(key, value) {
    let node = new Node(key, value)
    if (this.isEmpty()) {
      return this.append(key, value)
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.size++
  }

  remove(key) {
    if (this.isEmpty()) {
      return null
    }

    if (this.head.key === key) {
      this.head = this.head.next
      this.size--
      return
    }

    let curr = this.head
    while (curr.key !== key) {
      curr = curr.next
    }
    let prev = curr.prev
    let next = curr.next
    prev.next = next
    next.prev = prev
    this.size--
  }

  get(key) {
    let curr = this.head
    while (curr.key !== key) {
      curr = curr.next
    }

    if (curr.key === key) {
      return curr.value
    }

    return null
  }
}

class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }

  hash(key) {
    let total = 0
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }

  set(key, value) {
    const index = this.hash(key)
    if (!this.table[index]) {
      this.table[index] = new LinkedList()
    } else {
      let curr = this.table[index].head
      while (curr !== null) {
        if (curr.key === key) {
          curr.value = value
          return
        }
      }
    }
    this.table[index].append(key, value)
  }

  get(key) {
    const index = this.hash(key)
    if (!this.table[index]) {
      return null
    }

    return this.table[index].get(key)
  }

  remove(key) {
    const index = this.hash(key)
    if (this.table[index]) {
      this.table[index].remove(key)
    }
  }

  display() {
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        let curr = this.table[i].head
        while (curr !== null) {
          console.log(`Index: ${i} - Key: ${curr.key} - Value: ${curr.value}`)
          curr = curr.next
        }
      }
    }
  }
}

// HashTable Implementation

// - Hash tables (often implemented using JavaScript Objects) use a hash function to map keys to values, providing fast lookup, insertion, and deletion operations.

class HashTable {
  constructor(size) {
    this.size = size
    this.table = new Array(size)
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
    this.table[index] = value
  }

  get(key) {
    const index = this.hash(key)
    return this.table[index]
  }

  remove(key) {
    const index = this.hash(key)
    this.table[index] = undefined
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(`${i}: ${this.table[i]}`)
      }
    }
  }
}

// NOTE: Hash collisions are not yet fixed with this code.

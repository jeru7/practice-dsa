// Breath First Search in Binary Search Tree
// It's a technique used to explore a tree or graph level by level. You start at the root node (the top node) and explore all the nodes at the current level before moving on to the next level.

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return !this.root
  }

  insert(value) {
    let node = new Node(value)
    if (this.isEmpty()) {
      this.root = node
      return
    } else {
      this.insertNode(this.root, node)
    }
  }

  insertNode(parent, child) {
    if (child.value < parent.value) {
      if (!parent.left) {
        parent.left = child
      } else {
        this.insertNode(parent.left, child)
      }
    } else if (child.value > parent.value) {
      if (!parent.right) {
        parent.right = child
      } else {
        this.insertNode(parent.right, child)
      }
    }
  }

  bfs() {
    let queue = []
    queue.push(this.root)
    while (queue.length) {
      let curr = queue.shift()
      console.log(curr.value)
      if (curr.left) {
        queue.push(curr.left)
      }

      if (curr.right) {
        queue.push(curr.right)
      }
    }
  }
}

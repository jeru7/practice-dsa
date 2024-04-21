// Depth First Search (Postorder)
// DFS: You start at the entrance (the root node) and keep going down a path until you reach a dead end (a leaf node), then you backtrack and try a different path.
// Postorder DFS: The left subtree is explored first, then the right subtree, and finally, the root node is visited.

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
    if (!this.root) {
      this.root = node
    } else {
      return this.insertNode(this.root, node)
    }
  }

  insertNode(parent, child) {
    if (child.value <= parent.value) {
      if (!parent.left) {
        parent.left = child
      } else {
        return this.insertNode(parent.left, child)
      }
    } else {
      if (!parent.right) {
        parent.right = child
      } else {
        return this.insertNode(parent.right, child)
      }
    }
  }

  postorderDFS(node = this.root) {
    if (node) {
      this.postorderDFS(node.left)
      this.postorderDFS(node.right)
      console.log(node.value)
    }
  }
}

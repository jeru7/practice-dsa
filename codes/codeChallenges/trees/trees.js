// Tree implementation in JavaScript

// Tree - Trees are hierarchical data structures consisting of nodes connected by edges. Common tree types include binary trees, binary search trees (BST), AVL trees, and more complext variants like heaps and tries.

class TreeNode {
  constructor(value) {
    this.value = value
    this.children = []
  }

  addChild(value) {
    const child = new TreeNode(value)
    child.parent = this
    this.children.push(child)
    return child
  }

  isLeaf() {
    return this.children.length === 0
  }

  siblings() {
    if (!this.parent) {
      return []
    }

    const parentNode = this.parent
    const nodeSiblings = []
    for (const child of parentNode.children) {
      if (child !== this) {
        nodeSiblings.push(child.value)
      }
    }

    return nodeSiblings
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  addRoot(node) {
    this.root = node
    return this.root
  }
}

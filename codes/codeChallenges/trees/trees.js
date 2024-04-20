// Tree implementation in JavaScript

// Tree - Trees are hierarchical data structures consisting of nodes connected by edges. Common tree types include binary trees, binary search trees (BST), AVL trees, and more complext variants like heaps and tries.

class TreeNode {
  constructor(value) {
    this.value = value
    this.parent = null
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

  isRoot() {
    if (this.parent) {
      return falsea
    }

    return true
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

  degree() {
    return this.children.length
  }

  getParent() {
    return this.parent.value
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

const tree = new Tree()

const rootNode = new TreeNode(1)
tree.addRoot(rootNode)

const child1 = rootNode.addChild(2)
const child2 = rootNode.addChild(3)
const child3 = rootNode.addChild(4)

const grandChild1 = child1.addChild(5)
const grandChild2 = child1.addChild(6)

console.log('rootNode siblings: ', rootNode.siblings())
console.log('siblings of child1: ', child1.siblings())
console.log('siblings of child2 ', child2.siblings())
console.log('siblings of grandChild1: ', grandChild1.siblings())
console.log('parent of grandChild1: ', grandChild1.getParent())
console.log('degree of child1: ', child1.degree())
console.log(child1.isRoot())

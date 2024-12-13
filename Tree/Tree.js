
const BinaryTree = require("./BinaryTree");

const tree = new BinaryTree();
tree.insert("A", null, null);    // Root
tree.insert("B", "A", "left");  // Left subtree
tree.insert("C", "A", "right"); // Right subtree
tree.insert("D", "B", "left");
tree.insert("E", "B", "right");
tree.insert("F", "C", "left");
tree.insert("G", "C", "right");
tree.insert("H", "D", "left");
tree.insert("I", "F", "left");
tree.insert("J", "F", "right");

console.log("Preorder Traversal:");
tree.preOrderTraverse();

console.log("Inorder Traversal:");
tree.inOrderTraverse();

console.log("Postorder Traversal:");
tree.postOrderTraverse();
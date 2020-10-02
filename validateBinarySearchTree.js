// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

var isValidBST = function (root, min = null, max = null) {
  if (root === null) {
    return null;
  }

  if (max !== null && root.val >= max) {
    return false;
  }

  if (min !== null && root.val <= min) {
    return false;
  }

  if (root.left && isValidBST(root.left, min, root.val) === false) {
    return false;
  }

  if (root.right && isValidBST(root.right, root.val, max) === false) {
    return false;
  }

  return true;
};

// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }

  var depthLeft = maxDepth(root.left);
  var depthRight = maxDepth(root.right);

  return Math.max(depthLeft, depthRight) + 1;
};

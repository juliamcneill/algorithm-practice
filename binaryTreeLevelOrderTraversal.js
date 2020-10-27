// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

var levelOrder = function (root) {
  var traversal = [];

  function inner(root, level) {
    if (root === null) {
      return;
    } else {
      if (traversal[level] === undefined) {
        traversal[level] = [];
      }

      traversal[level].push(root.val);

      inner(root.left, level + 1);
      inner(root.right, level + 1);

      return;
    }
  }

  inner(root, 0);

  return traversal;
};

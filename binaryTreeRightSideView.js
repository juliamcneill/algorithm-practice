// Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

var rightSideView = function (root) {
  var side = [];

  function inner(node, level) {
    if (node) {
      side[level] = node.val;

      inner(node.left, level + 1);
      inner(node.right, level + 1);
    } else {
      return;
    }
  }

  inner(root, 0);

  return side;
};

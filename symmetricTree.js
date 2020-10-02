// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

var isSymmetric = function (root) {
  var isMirror = function (root1, root2) {
    if ((root1 === null) & (root2 === null)) {
      return true;
    } else if (root1 === null || root2 === null) {
      return false;
    }

    return (
      root1.val === root2.val &&
      isMirror(root1.right, root2.left) &&
      isMirror(root1.left, root2.right)
    );
  };

  return isMirror(root, root);
};

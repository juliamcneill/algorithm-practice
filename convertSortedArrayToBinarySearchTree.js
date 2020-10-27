// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

var sortedArrayToBST = function (nums) {
  function newTree(start, end) {
    if (start <= end) {
      var mid = Math.floor((start + end) / 2);
      var node = new TreeNode(nums[mid]);
      node.left = newTree(start, mid - 1);
      node.right = newTree(mid + 1, end);
      return node;
    }

    return null;
  }

  return newTree(0, nums.length - 1);
};

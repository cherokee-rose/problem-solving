/*
    https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
    https://github.com/cherokee-rose

    Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary 
    search tree.

    A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by 
    more than one.

    Example 1:
        Input: nums = [-10,-3,0,5,9]
        Output: [0,-3,9,-10,null,5]
        Explanation: [0,-10,5,null,-3,null,9] is also accepted:

    Example 2:
        Input: nums = [1,3]
        Output: [3,1]
        Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
    
    Constraints:
        * 1 <= nums.length <= 10^4
        * -10^4 <= nums[i] <= 10^4
        * nums is sorted in a strictly increasing order.
*/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    let root: TreeNode;
    root = new TreeNode(nums[-1 + Math.floor((nums.length + 1) / 2)]);
  
    function createTree(current: TreeNode, min: number, max: number) {  
      console.log(current.val);
  
      let mid = min + Math.floor((max - min) / 2);
      let lowerMid = min + Math.floor((mid - min) / 2);
      let upperMid = mid + Math.floor((max - mid) / 2);
      
      if (lowerMid !== min) {
        current.left = new TreeNode(nums[lowerMid]);  
        createTree(current.left, min, mid);
      }

      if (upperMid !== mid) {
        current.right = new TreeNode(nums[upperMid]);  
        createTree(current.right, mid, max);  
      }
      
    }
  
    createTree(root, -1, nums.length);
    
    return root;
}

function printResult(root: TreeNode): void {
  if (root === null) {
    return;
  }

  console.log(root.left?.val);
  console.log(root.right?.val);

  if (root.left !== null) {
    printResult(root.left);
  }

  if (root.right !== null) {
    printResult(root.right);
  }
}

let result = sortedArrayToBST([1, 3]);
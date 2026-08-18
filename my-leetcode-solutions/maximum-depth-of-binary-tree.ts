// My solution to 104 - Maximum Depth of Binary Tree

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    // Base case
    if (root === null) {
        return 0;
    }

    const left = maxDepth(root.left) + 1
    const right = maxDepth(root.right) + 1
    return left > right ? left : right;
  

};

// Time Complexity: O(n)

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

const rootTestCases = [
    new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))),
    new TreeNode(1, null, new TreeNode(2)),
    new TreeNode(1, new TreeNode(2)),
];

for (let i = 0; i < rootTestCases.length; i++) {
    const output = maxDepth(rootTestCases[i]);
    //  const output = preOrderTraversal(rootTestCases[i]);
    console.log(`Output: ${output} for root as ${JSON.stringify(rootTestCases[i])}`);
}

export {};


// traverse the tree using depth first search. when you get to the root, calculate the depth. if it's greater than max depth, change max depth to that height


// want to do pre order traversal
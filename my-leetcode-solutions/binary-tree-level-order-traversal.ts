// My solution to 102 - Binary Tree Level Order Traversal

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

function levelOrder(root: TreeNode | null): number[][] {
    
};

// Time Complexity:

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
    new TreeNode(1),
    null,
];

for (let i = 0; i < rootTestCases.length; i++) {
    const output = levelOrder(rootTestCases[i]);
    console.log(`Output: ${JSON.stringify(output)} for root as ${JSON.stringify(rootTestCases[i])}`);
}

export {};

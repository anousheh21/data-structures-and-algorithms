// My solution to 100 - Same Tree

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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    }

    if (isSameTree(p.left, q.left) === false) {
        return false;
    } else if (isSameTree(p.right, q.right) === false) {
        return false;
    } else {
        isSameTree(p.left, q.left);
        isSameTree(p.right, q.right);
        return true;
    }
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

const pTestCases = [
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    new TreeNode(1, new TreeNode(2)),
    new TreeNode(1, new TreeNode(2), new TreeNode(1)),
];

const qTestCases = [
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    new TreeNode(1, null, new TreeNode(2)),
    new TreeNode(1, new TreeNode(1), new TreeNode(2)),
];

for (let i = 0; i < pTestCases.length; i++) {
    const output = isSameTree(pTestCases[i], qTestCases[i]);
    console.log(`Output: ${output} for p as ${JSON.stringify(pTestCases[i])} and q as ${JSON.stringify(qTestCases[i])}`);
}

export {};

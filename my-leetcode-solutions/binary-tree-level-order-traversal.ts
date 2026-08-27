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
    // a queue is first in first out

    const outputQueue: number[][] = [];
    let queue: TreeNode[] = [];

    if (root !== null) {
        queue.push(root);
    } else {
        return [];
    }

    while(queue.length > 0) {
        const newQueue: TreeNode[] = [];

        for(let i = 0; i < queue.length; i++) {
            if (queue[i].left !== null) {
                newQueue.push(queue[i].left!);
            }

            if (queue[i].right !== null) {
                newQueue.push(queue[i].right!);
            }
        }

        const valQueue = queue.map((x) => x.val);
        outputQueue.push(valQueue);

        queue = newQueue;
    }

    return outputQueue;
};

// Time Complexity: O(n^2)

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
    new TreeNode(3, new TreeNode(9, new TreeNode(1), new TreeNode(2)), new TreeNode(20, new TreeNode(15), new TreeNode(7))),
];

for (let i = 0; i < rootTestCases.length; i++) {
    const output = levelOrder(rootTestCases[i]);
    console.log(`Output: ${JSON.stringify(output)} for root as ${JSON.stringify(rootTestCases[i])}`);
}

export {};


// create a queue
// put root node in the queue
// find children of each node in the queue
// put children in the queue
// find children of each node in the queue
// stop when all children of each node in the queue is null (so when the queue is empty at the start of the new loop)
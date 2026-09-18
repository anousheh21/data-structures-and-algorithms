// My solution to 98 - Validate Binary Search Tree

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

function isValidBST(root: TreeNode | null): boolean {
    const orderedArray: number[] = [];

    const helper = (root: TreeNode | null, orderedArray: number[]): number[] => {
          if(root === null) {
            return [];
        }

        helper(root.left, orderedArray);
        
        orderedArray.push(root.val)
        // console.log(orderedArray)
        helper(root.right, orderedArray);

        return orderedArray;
    }
    
   const output = helper(root, orderedArray);

   // check every value in output is unique

   const outputSet = new Set<number>(output);
   if (output.length !== outputSet.size) {
    return false;
   }

   const sortedOutput = [...output].sort((a, b) => a - b)

    const equal = output.every((value, index) => value === sortedOutput[index])

    if (equal) {
        return true;
    } else {
        return false;
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

const rootTestCases = [
    new TreeNode(2, new TreeNode(1), new TreeNode(3)),
    new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6))),
    new TreeNode(5, new TreeNode(4), new TreeNode(6, new TreeNode(3), new TreeNode(7))),
];

for (let i = 0; i < rootTestCases.length; i++) {
    const output = isValidBST(rootTestCases[i]);
    console.log(`Output: ${output} for root as ${JSON.stringify(rootTestCases[i])}`);
}

export {};

// depth first search
// for each node, check that current > left and current < right
// if that condition breaks, return false and don't bother continuing
// if you get to the end and it's still true, return true

// But the problem is, you need to ensure that there are no nodes in left subtreees that are bigger than any node in a level above, and no nodes in right subtrees that are smaller than any level above.

# My solution to 104 - Maximum Depth of Binary Tree

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxDepth(self, root: TreeNode | None) -> int:
        # base case
        if root == None:
            return 0

        # recursive case
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))



# Time Complexity:

root_test_cases = [
    [3, 9, 20, None, None, 15, 7],
    [1, None, 2],
]

solution = Solution()

for i in range(len(root_test_cases)):
    nodes = [
        TreeNode(value) if value is not None else None
        for value in root_test_cases[i]
    ]
    children = iter(nodes[1:])

    for node in nodes:
        if node is not None:
            node.left = next(children, None)
            node.right = next(children, None)

    root = nodes[0]
    output = solution.maxDepth(root)
    print(f"Output: {output!r} for root as {root_test_cases[i]!r}")

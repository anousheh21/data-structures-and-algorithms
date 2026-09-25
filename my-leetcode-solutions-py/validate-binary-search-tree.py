# My solution to 98 - Validate Binary Search Tree

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isValidBST(self, root: TreeNode | None) -> bool:
        pass


# Time Complexity:

root_test_cases = [
    [2, 1, 3],
    [5, 1, 4, None, None, 3, 6],
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
    output = solution.isValidBST(root)
    print(f"Output: {output!r} for root as {root_test_cases[i]!r}")

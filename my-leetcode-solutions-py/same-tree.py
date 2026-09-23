# My solution to 100 - Same Tree

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSameTree(self, p: TreeNode | None, q: TreeNode | None) -> bool:
        pass


# Time Complexity:

p_test_cases = [
    [1, 2, 3],
    [1, 2],
    [1, 2, 1],
]

q_test_cases = [
    [1, 2, 3],
    [1, None, 2],
    [1, 1, 2],
]

solution = Solution()

for i in range(len(p_test_cases)):
    trees = []

    for values in (p_test_cases[i], q_test_cases[i]):
        nodes = [
            TreeNode(value) if value is not None else None
            for value in values
        ]
        children = iter(nodes[1:])

        for node in nodes:
            if node is not None:
                node.left = next(children, None)
                node.right = next(children, None)

        trees.append(nodes[0])

    p, q = trees
    output = solution.isSameTree(p, q)
    print(
        f"Output: {output!r} for p as {p_test_cases[i]!r} "
        f"and q as {q_test_cases[i]!r}"
    )

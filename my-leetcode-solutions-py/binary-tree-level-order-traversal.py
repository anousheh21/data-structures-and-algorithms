# My solution to 102 - Binary Tree Level Order Traversal

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# from collections import deque

# class Solution:
#     def levelOrder(self, root: TreeNode | None) -> list[list[int]]:
#         """
#         BFS (no recursion). Once all nodes at a level have been traversed, move to the next level
#         """

#         queue = deque()
#         queue.append(root)

#         if root is None:
#             return []

#         outputArr = [[root]]
#         outputIntArr = [[root.val]]


#         while len(queue) > 0:
#             current = queue.popleft()
#             # print(current.val if current is not None else None)

#             if current is not None and current.left is not None:
#                 queue.append(current.left)
#                 if len(outputArr) > 1 and current in outputArr[-2]:
#                     outputArr[-1].append(current.left)
#                     outputIntArr[-1].append(current.left.val)
#                 else:
#                     outputArr.append([current.left])
#                     outputIntArr.append([current.left.val])


#             if current is not None and current.right is not None:
#                 queue.append(current.right)
#                 if len(outputArr) > 1 and current in outputArr[-2]:
#                     outputArr[-1].append(current.right)
#                     outputIntArr[-1].append(current.right.val)
#                 else:
#                     outputArr.append([current.right])
#                     outputIntArr.append([current.right.val])

#         return outputIntArr



from collections import deque

class Solution:
    def levelOrder(self, root: TreeNode | None) -> list[list[int]]:
        """
        BFS (no recursion). Once all nodes at a level have been traversed, move to the next level
        """

        queue = deque()
        queue.append(root)

        if root is None:
            return []

        levelSize = len(queue)
        outputArr = [[]]

        while len(queue) > 0:
            current = queue.popleft()
            # print(current.val if current is not None else None)
            
            if levelSize > 0:
                outputArr[-1].append(current.val)
                levelSize -= 1
                
            if current.left is not None:
                queue.append(current.left)

            if current.right is not None:
                queue.append(current.right)

            if levelSize == 0 and len(queue) > 0:
                outputArr.append([])
                levelSize = len(queue)

        return outputArr



# Time Complexity:

root_test_cases = [
    [3, 9, 20, None, None, 15, 7],
    [1],
    [],
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

    root = nodes[0] if nodes else None
    output = solution.levelOrder(root)
    print(f"Output: {output!r} for root as {root_test_cases[i]!r}")
